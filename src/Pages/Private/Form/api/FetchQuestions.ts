import {
  ICategory,
  IFormQuestionsContextState, IQuestion,
  ISection, ISubSection,
} from '../../../../Context/FormQuestions/interface';
import {API, graphqlOperation} from 'aws-amplify';
import {getSectionsWithQuestions} from '../OwnQueries';

// TODO change the function to mantain the change on the path variables

export const fetchQuestions = async () => {
  try {
    let totalQuestions = 0;
    const newState: IFormQuestionsContextState = {
      currentProgress: 0,
      totalQuestions: 0,
      questionsAnswered: [],
      sections: [],
      currentSection: null,
      nextSection: null,
      previousSection: null,
    };
    const databaseQuestions:any = await API.graphql(
        graphqlOperation(
            getSectionsWithQuestions,
            {},
        ));
    if (databaseQuestions &&
            databaseQuestions.data &&
            databaseQuestions.data.listSections
    ) {
      let sections:Array<any> = databaseQuestions
          .data
          .listSections
          .items.sort((a:any, b:any)=>{
            return a.order - b.order;
          });
      let currentSection: ISection = {
        id: '',
        name: '',
        order: -1,
        subSections: <ISubSection[]>[],
      };
      let nextSection: ISection = {
        id: '',
        name: '',
        order: -1,
        subSections: <ISubSection[]>[],
      };

      sections = sections.map((item, index)=>{
        const orderedSubSections = item.subSections.items
            .sort((a:any, b:any)=>{
              return a.order - b.order;
            });
        const subSections = orderedSubSections.map(
            (subSection: any): ISubSection=>{
              const subSectionQuestions = <IQuestion[]>[];
              let maxStack = 0;
              const orderedQuestions = subSection.questions.items
                  .sort((a:any, b:any)=>{
                    return a.order - b.order;
                  });
              orderedQuestions.map((dbQuestion: any)=>{
                const category: ICategory = {
                  id: dbQuestion.category.id,
                  name: dbQuestion.category.name,
                };

                const question: IQuestion = {
                  category: category,
                  id: dbQuestion.id,
                  items: dbQuestion.items,
                  question: dbQuestion.question,
                  placeHolder: dbQuestion.placeHolder,
                  stackPhrase: dbQuestion.stackPhrase,
                  stack: parseInt(dbQuestion.stack),
                  order: parseInt(dbQuestion.order),
                  imagesPath: dbQuestion.imagesPath,
                };
                totalQuestions += 1;
                if (maxStack < dbQuestion.stack) {
                  maxStack = dbQuestion.stack;
                }
                subSectionQuestions.push(question);
              });

              return {
                id: subSection.id,
                maxStack: maxStack,
                name: subSection.name,
                order: subSection.order,
                questions: orderedQuestions,
              };
            });

        const section: ISection = {
          id: item.id,
          subSections: subSections,
          order: item.order,
          name: item.name,
        };
        if (index === 0) {
          currentSection = section;
        }
        if (index === 1) {
          nextSection = section;
        }
        return section;
      });
      newState.previousSection = null;
      newState.nextSection = nextSection;
      newState.currentSection = currentSection;
      newState.totalQuestions = totalQuestions;
      newState.sections = sections;
      if (newState) {
        return newState;
      }
      throw new Error('Error fetching the questions');
    }
  } catch (error) {
    console.log(error);
  }
};