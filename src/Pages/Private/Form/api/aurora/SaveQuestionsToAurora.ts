import {queryConstants} from './QueryConstants';
import {IQuestionerState} from '../../Questioner/interface';
import uniqid from 'uniqid';
import {API, graphqlOperation} from 'aws-amplify';
import {
  DemographicAuroraStack2,
  DemographicStack0,
  DemographicStack1, DemographicStack3, DemographicStack4, DemographicStack5,
  lakeNonaStack0,
} from './initVariables';

export interface ISaveDataAuroraParams {
    section:string,
    subSection: string,
    stack: string
}

const saveQuestionsToAurora = async (
    {stack, subSection}:ISaveDataAuroraParams,
    questions:IQuestionerState,
    formId: string,
) => {
  const replacedSubSection = subSection.replaceAll(/[\s-&]+/g, '');
  const replacedStack = `stack${stack}`;
  const uniqueId = uniqid(replacedSubSection, replacedStack);

  // Lake Nona subsection send to db
  if (subSection ==='Lake-Nona' && stack === '0') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(lakeNonaStack0);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 4) {
          lakeNonaStack0[objectKeys[i]] = parseInt(valuesArray[i].response);
        }
      }
      lakeNonaStack0.id = uniqueId;
      lakeNonaStack0.form_id = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.LakeNona.LakeNona.stack0,
              {
                createLakeNona_stack0Input: {
                  form_id: lakeNonaStack0.form_id,
                  id: lakeNonaStack0.id,
                  live_in: lakeNonaStack0.live_in,
                  play_in: lakeNonaStack0.play_in,
                  study_in: lakeNonaStack0.study_in,
                  work_in: lakeNonaStack0.work_in,
                },
              },
          ),
      );
    } catch (err) {
    }
  }

  // Demographics subsection  stack 0 send to db
  if (subSection ==='Demographics' && stack === '0') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(DemographicStack0);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 3) {
          if (i === 0) {
            DemographicStack0[objectKeys[i]] = parseInt(
                valuesArray[i].response,
            );
          }
          DemographicStack0[objectKeys[i]] = valuesArray[i].response;
        }
      }
      DemographicStack0.id = uniqueId;
      DemographicStack0.form_id = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.Demographics.stack0,
              {
                createDemographics_stack0Input: {
                  form_id: DemographicStack0.form_id,
                  id: DemographicStack0.id,
                  born_in_US: DemographicStack0.born_in_US,
                  how_many_years_in_florida: DemographicStack0.
                      how_many_years_in_florida,
                  what_state_or_territory: DemographicStack0.
                      what_state_or_territory,
                },
              },
          ),
      );
    } catch (err) {

    }
  }

  // Demographics subsection  stack 1 send to db
  if (subSection ==='Demographics' && stack === '1') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(DemographicStack1);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 3) {
          if (i === 0) {
            DemographicStack1[objectKeys[i]] = parseInt(
                valuesArray[i].response,
            );
          }
          DemographicStack1[objectKeys[i]] = valuesArray[i].response;
        }
      }
      DemographicStack1.id = uniqueId;
      DemographicStack1.form_id = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.Demographics.stack1,
              {
                createDemographics_stack1Input: {
                  formid: DemographicStack1.formid,
                  id: DemographicStack1.id,
                  are_you_spanish_latino: DemographicStack1.
                      are_you_spanish_latino,
                  select_all_that_apply: DemographicStack1.
                      select_all_that_apply,
                  what_is_your_race: DemographicStack1.
                      what_is_your_race,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  // Demographics subsection  stack 2 send to db
  if (subSection ==='Demographics' && stack === '2') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(DemographicAuroraStack2);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i === 0) {
          DemographicAuroraStack2[objectKeys[i]] = valuesArray[i].response;
        }
      }
      DemographicAuroraStack2.id = uniqueId;
      DemographicAuroraStack2.form_id = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.Demographics.stack2,
              {
                createDemographics_stack2Input: {
                  formid: DemographicAuroraStack2.formid,
                  id: DemographicAuroraStack2.id,
                  highest_level_education: DemographicAuroraStack2.
                      highest_level_education,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  // Demographics subsection  stack 3 send to db
  if (subSection ==='Demographics' && stack === '3') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(DemographicStack3);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 2) {
          if (i === 1) {
            DemographicStack3[objectKeys[i]] = parseInt(
                valuesArray[i].response,
            );
          }
          DemographicStack3[objectKeys[i]] = valuesArray[i].response;
        }
      }
      DemographicStack3.id = uniqueId;
      DemographicStack3.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.Demographics.stack3,
              {
                createDemographics_stack3Input: {
                  formid: DemographicStack3.formid,
                  id: DemographicStack3.id,
                  living_marriage_like: DemographicStack3.
                      living_marriage_like,
                  marital_status: DemographicStack3.marital_status,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  // Demographics subsection  stack 4 send to db
  if (subSection ==='Demographics' && stack === '4') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(DemographicStack4);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 3) {
          DemographicStack4[objectKeys[i]] = parseInt(
              valuesArray[i].response,
          );
        }
      }
      DemographicStack4.id = uniqueId;
      DemographicStack4.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.Demographics.stack4,
              {
                createDemographics_stack4Input: {
                  formid: DemographicStack4.formid,
                  id: DemographicStack4.id,
                  bio_children: DemographicStack4.
                      bio_children,
                  children_0_to_17: DemographicStack4.children_0_to_17,
                  step_children: DemographicStack4.step_children,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  // Demographics subsection  stack 5 send to db
  if (subSection ==='Demographics' && stack === '5') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(DemographicStack5);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 2) {
          if (i === 1) {
            DemographicStack5[objectKeys[i]] = parseInt(
                valuesArray[i].response,
            );
          }
          DemographicStack5[objectKeys[i]] = valuesArray[i].response;
        }
      }
      DemographicStack5.id = uniqueId;
      DemographicStack5.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.Demographics.stack5,
              {
                createDemographics_stack5Input: {
                  formid: DemographicStack5.formid,
                  id: DemographicStack5.id,
                  currently_pregnant: DemographicStack5.
                      currently_pregnant,
                  gender: DemographicStack5.gender,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }
};

export default saveQuestionsToAurora;
