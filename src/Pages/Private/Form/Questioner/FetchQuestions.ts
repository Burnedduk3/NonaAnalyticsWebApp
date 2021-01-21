import {
  ICategory,
  IFormQuestionsContextState, IQuestion,
  ISection, ISubSection,
} from '../../../../Context/FormQuestions/interface';
import {API, graphqlOperation} from 'aws-amplify';
import {getSectionsWithQuestions} from '../OwnQueries';

// TODO change the function to mantain the change on the path variables

export const fetchQuestions = async (
    currentState: IFormQuestionsContextState | undefined,
    firstTime: boolean,
) => {
  try {
    if (!currentState) {
      throw new Error('error Creating the context');
    }
    const databaseQuestions:any = await API.graphql(
        graphqlOperation(
            getSectionsWithQuestions,
            {},
        ));
    if (databaseQuestions &&
            databaseQuestions.data &&
            databaseQuestions.data.listSections
    ) {
      let sections:Array<any> = databaseQuestions.data.listSections.items;
      let currentSection: ISection = {
        id: '',
        name: '',
        subSections: <ISubSection[]>[],
      };
      let nextSection: ISection = {
        id: '',
        name: '',
        subSections: <ISubSection[]>[],
      };
      const healthRegex = new RegExp('Health', 'g');
      const LakeNonaRegex = new RegExp('Lake-Nona', 'g');
      sections = sections.map((item)=>{
        const subSections = item.subSections.items.map(
            (subSection: any): ISubSection=>{
              const subSectionQuestions = <IQuestion[]>[];
              let maxStack = 0;
              subSection.questions.items.map((dbQuestion: any)=>{
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
                  imagesPath: dbQuestion.imagesPath,
                };
                if (maxStack < dbQuestion.stack) {
                  maxStack = dbQuestion.stack;
                }
                subSectionQuestions.push(question);
              });
              return {
                id: subSection.id,
                maxStack: maxStack,
                name: subSection.name,
                questions: subSectionQuestions,
              };
            });

        const section: ISection = {
          id: item.id,
          subSections: subSections,
          name: item.name,
        };
        if (LakeNonaRegex.test(section.name)) {
          currentSection = section;
        }
        if (healthRegex.test(section.name)) {
          nextSection = section;
        }
        return section;
      });
      if (firstTime) {
        currentState.previous = null;
        currentState.nextSection = nextSection;
        currentState.currentSection = currentSection;
      }

      currentState.sections = sections;
      if (currentState) {
        return currentState;
      }
      throw new Error('Error fetching the questions');
    }
  } catch (error) {
  }
};
