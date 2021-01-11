import {
  IFormQuestionsContextState,
  ISection,
} from '../../../../Context/FormQuestions/interface';
import {API, graphqlOperation} from 'aws-amplify';
import {getSectionsWithQuestions} from '../OwnQueries';

export const fetchQuestions = async (
    currentState: IFormQuestionsContextState | undefined,
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
      const questions:Array<any> = databaseQuestions.data.listSections.items;
      let currentSection: ISection = {
        id: '',
        name: '',
        subSections: [],
      };
      let nextSection: ISection = {
        id: '',
        name: '',
        subSections: [],
      };
      const healthRegex = new RegExp('Health', 'g');
      const LakeNonaRegex = new RegExp('Lake-Nona', 'g');
      questions.map((item)=>{
        if (LakeNonaRegex.test(item.name)) {
          currentSection = item;
        }
        if (healthRegex.test(item.name)) {
          nextSection = item;
        }
        const section: ISection = {
          ...item,
        };
        currentState.sections?.push(section);
        currentState.previous = null;
        currentState.nextSection = nextSection;
        currentState.currentSection = currentSection;
      });
      if (currentState) {
        return currentState;
      }
      throw new Error('Error fetching the questions');
    }
  } catch (error) {
    console.log('error fetching data');
  }
};
