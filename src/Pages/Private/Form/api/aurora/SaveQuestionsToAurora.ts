/* eslint-disable */
// _    _   _____     _____   ______   _   _   _______     _____    ______   ______               _____   _______    ____    _____
// | |  | | |  __ \   / ____| |  ____| | \ | | |__   __|   |  __ \  |  ____| |  ____|     /\      / ____| |__   __|  / __ \  |  __ \
// | |  | | | |__) | | |  __  | |__    |  \| |    | |      | |__) | | |__    | |__       /  \    | |         | |    | |  | | | |__) |
// | |  | | |  _  /  | | |_ | |  __|   | . ` |    | |      |  _  /  |  __|   |  __|     / /\ \   | |         | |    | |  | | |  _  /
// | |__| | | | \ \  | |__| | | |____  | |\  |    | |      | | \ \  | |____  | |       / ____ \  | |____     | |    | |__| | | | \ \
// \____/  |_|  \_\  \_____| |______| |_| \_|    |_|      |_|  \_\ |______| |_|      /_/    \_\  \_____|    |_|     \____/  |_|  \_\
//
//
/* eslint-enable */

import {queryConstants} from './QueryConstants';
import {IQuestionerState} from '../../Questioner/interface';
import uniqid from 'uniqid';
import {API, graphqlOperation} from 'aws-amplify';
import {
  DemographicAuroraStack2,
  DemographicStack0,
  DemographicStack1,
  DemographicStack3,
  DemographicStack4,
  DemographicStack5, HealthBehaviorsstack0, HealthBehaviorsstack1,
  lakeNonaStack0, OralHealthStack0, OralHealthStack1,
  QualityOfLifeStack0,
  QualityOfLifeStack1,
  QualityOfLifeStack2,
  QualityOfLifeStack3,
  YourHealthStack0,
  YourHealthStack3,
  YourHealthStack4,
  YourHealthStack5,
  YourHealthStack6, YourHealthStack7, YourHealthStack8, YourHealthStack9,
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

  /* eslint-disable */
  //  _____                                                              _       _
  //  |  __ \                                                            | |     (_)
  //  | |  | |   ___   _ __ ___     ___     __ _   _ __    __ _   _ __   | |__    _    ___   ___
  //  | |  | |  / _ \ | '_ ` _ \   / _ \   / _` | | '__|  / _` | | '_ \  | '_ \  | |  / __| / __|
  // | |__| | |  __/ | | | | | | | (_) | | (_| | | |    | (_| | | |_) | | | | | | | | (__  \__ \
  // |_____/   \___| |_| |_| |_|  \___/   \__, | |_|     \__,_| | .__/  |_| |_| |_|  \___| |___/
  //                                       __/ |                | |
  //                                      |___/                 |_|
  /* eslint-enable */


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
          if (valuesArray[i]) {
            lakeNonaStack0[objectKeys[i]] = parseInt(valuesArray[i].response);
          } else {
            lakeNonaStack0[objectKeys[i]] = null;
          }
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
          if (valuesArray[i]) {
            if (i === 0) {
              DemographicStack0[objectKeys[i]] = parseInt(
                  valuesArray[i].response,
              );
            }
            DemographicStack0[objectKeys[i]] = valuesArray[i].response;
          } else {
            DemographicStack0[objectKeys[i]] = null;
          }
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
          if (valuesArray[i]) {
            if (i === 0) {
              DemographicStack1[objectKeys[i]] = parseInt(
                  valuesArray[i].response,
              );
            }
            DemographicStack1[objectKeys[i]] = valuesArray[i].response;
          } else {
            DemographicStack1[objectKeys[i]] = null;
          }
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
        if (valuesArray[i]) {
          if (i === 0) {
            DemographicAuroraStack2[objectKeys[i]] = valuesArray[i].response;
          }
        } else {
          DemographicAuroraStack2[objectKeys[i]] = null;
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
          if (valuesArray[i]) {
            if (i === 1) {
              DemographicStack3[objectKeys[i]] = parseInt(
                  valuesArray[i].response,
              );
            }
            DemographicStack3[objectKeys[i]] = valuesArray[i].response;
          } else {
            DemographicStack3[objectKeys[i]] = null;
          }
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
          if (valuesArray[i]) {
            DemographicStack4[objectKeys[i]] = parseInt(
                valuesArray[i].response,
            );
          } else {
            DemographicStack4[objectKeys[i]] = null;
          }
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
          if (valuesArray[i]) {
            if (i === 1) {
              DemographicStack5[objectKeys[i]] = parseInt(
                  valuesArray[i].response,
              );
            }
            DemographicStack5[objectKeys[i]] = valuesArray[i].response;
          } else {
            DemographicStack5[objectKeys[i]] = null;
          }
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
  /* eslint-disable */
  //    ____                    _   _   _                      __    _        _    __
  //   / __ \                  | | (_) | |                    / _|  | |      (_)  / _|
  //  | |  | |  _   _    __ _  | |  _  | |_   _   _    ___   | |_   | |       _  | |_    ___
  // | |  | | | | | |  / _` | | | | | | __| | | | |  / _ \  |  _|  | |      | | |  _|  / _ \
  // | |__| | | |_| | | (_| | | | | | | |_  | |_| | | (_) | | |    | |____  | | | |   |  __/
  // \___\_\  \__,_|  \__,_| |_| |_|  \__|  \__, |  \___/  |_|    |______| |_| |_|    \___|
  //  __/ |
  // |___/
  /* eslint-enable */

  // Quality of life subsection  stack 0 send to db
  if (subSection ==='Quality-of-Life' && stack === '0') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(QualityOfLifeStack0);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 2) {
          if ( valuesArray[i]) {
            QualityOfLifeStack0[objectKeys[i]] = valuesArray[i].response;
          } else {
            QualityOfLifeStack0[objectKeys[i]] = null;
          }
        }
      }
      QualityOfLifeStack0.id = uniqueId;
      QualityOfLifeStack0.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.QualityofLife.stack0,
              {
                createQuality_of_life_stack0Input: {
                  formid: QualityOfLifeStack0.formid,
                  id: QualityOfLifeStack0.id,
                  health_general: QualityOfLifeStack0.
                      health_general,
                  qol_general: QualityOfLifeStack0.qol_general,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  // Quality of life subsection  stack 1 send to db
  if (subSection ==='Quality-of-Life' && stack === '1') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(QualityOfLifeStack1);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 3) {
          if ( valuesArray[i]) {
            QualityOfLifeStack1[objectKeys[i]] = valuesArray[i].response;
          } else {
            QualityOfLifeStack1[objectKeys[i]] = null;
          }
        }
      }
      QualityOfLifeStack1.id = uniqueId;
      QualityOfLifeStack1.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.QualityofLife.stack1,
              {
                createQuality_of_life_stack1Input: {
                  formid: QualityOfLifeStack1.formid,
                  id: QualityOfLifeStack1.id,
                  alert_and_focused: QualityOfLifeStack1.
                      alert_and_focused,
                  full_of_energy: QualityOfLifeStack1.full_of_energy,
                  health_compared: QualityOfLifeStack1.health_compared,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  // Quality of life subsection  stack 2 send to db
  if (subSection ==='Quality-of-Life' && stack === '2') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(QualityOfLifeStack2);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 6) {
          if ( valuesArray[i]) {
            QualityOfLifeStack2[objectKeys[i]] = parseInt(
                valuesArray[i].response,
            );
          } else {
            QualityOfLifeStack2[objectKeys[i]] = null;
          }
        }
      }
      QualityOfLifeStack2.id = uniqueId;
      QualityOfLifeStack2.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.QualityofLife.stack2,
              {
                createQuality_of_life_stack2Input: {
                  formid: QualityOfLifeStack2.formid,
                  id: QualityOfLifeStack2.id,
                  anger: QualityOfLifeStack2.anger,
                  enjoyment: QualityOfLifeStack2.enjoyment,
                  happiness: QualityOfLifeStack2.happiness,
                  sadness: QualityOfLifeStack2.sadness,
                  stress: QualityOfLifeStack2.stress,
                  worry: QualityOfLifeStack2.worry,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  // Quality of life subsection  stack 3 send to db
  if (subSection ==='Quality-of-Life' && stack === '3') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(QualityOfLifeStack3);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 1) {
          if ( valuesArray[i]) {
            QualityOfLifeStack3[objectKeys[i]] = parseInt(
                valuesArray[i].response,
            );
          } else {
            QualityOfLifeStack3[objectKeys[i]] = null;
          }
        }
      }
      QualityOfLifeStack3.id = uniqueId;
      QualityOfLifeStack3.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.QualityofLife.stack3,
              {
                createQuality_of_life_stack3Input: {
                  formid: QualityOfLifeStack3.formid,
                  id: QualityOfLifeStack3.id,
                  ladder: QualityOfLifeStack3.ladder,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }
  /* eslint-disable */
  //   __     __                           _    _                  _   _     _
  //  \ \   / /                          | |  | |                | | | |   | |
  //   \ \_/ /    ___    _   _   _ __    | |__| |   ___    __ _  | | | |_  | |__
  //    \   /    / _ \  | | | | | '__|   |  __  |  / _ \  / _` | | | | __| | '_ \
  //     | |    | (_) | | |_| | | |      | |  | | |  __/ | (_| | | | | |_  | | | |
  //     |_|     \___/   \__,_| |_|      |_|  |_|  \___|  \__,_| |_|  \__| |_| |_|
  /* eslint-enable */

  //  Your Health subsection  stack 0 send to db
  if (subSection ==='Your-Health' && stack === '0') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(YourHealthStack0);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 2) {
          if ( valuesArray[i]) {
            if (i == 1) {
              YourHealthStack0[objectKeys[i]] = parseInt(
                  valuesArray[i].response,
              );
            } else {
              YourHealthStack0[objectKeys[i]] = valuesArray[i].response;
            }
          } else {
            YourHealthStack0[objectKeys[i]] = null;
          }
        }
      }
      YourHealthStack0.id = uniqueId;
      YourHealthStack0.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.YourHealth.stack0,
              {
                createYour_health_stack0Input: {
                  formid: YourHealthStack0.formid,
                  id: YourHealthStack0.id,
                  feet_height: YourHealthStack0.feet_height,
                  weight: YourHealthStack0.weight,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  //  Your Health subsection  stack 3 send to db
  if (subSection ==='Your-Health' && stack === '3') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(YourHealthStack3);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 6) {
          if ( valuesArray[i]) {
            YourHealthStack3[objectKeys[i]] = valuesArray[i].response;
          } else {
            YourHealthStack3[objectKeys[i]] = null;
          }
        }
      }
      YourHealthStack3.id = uniqueId;
      YourHealthStack3.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.YourHealth.stack3,
              {
                createYour_health_stack3Input: {
                  formid: YourHealthStack3.formid,
                  id: YourHealthStack3.id,
                  anxious_nervous: YourHealthStack3.anxious_nervous,
                  dizziness: YourHealthStack3.dizziness,
                  heart_pound: YourHealthStack3.heart_pound,
                  irritable_annoyed: YourHealthStack3.irritable_annoyed,
                  shortness_of_breath: YourHealthStack3.shortness_of_breath,
                  restless_tense: YourHealthStack3.restless_tense,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  //  Your Health subsection  stack 4 send to db
  if (subSection ==='Your-Health' && stack === '4') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(YourHealthStack4);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 7) {
          if ( valuesArray[i]) {
            YourHealthStack4[objectKeys[i]] = valuesArray[i].response;
          } else {
            YourHealthStack4[objectKeys[i]] = null;
          }
        }
      }
      YourHealthStack4.id = uniqueId;
      YourHealthStack4.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.YourHealth.stack4,
              {
                createYour_health_stack4Input: {
                  formid: YourHealthStack4.formid,
                  id: YourHealthStack4.id,
                  constipation: YourHealthStack4.constipation,
                  difficulty_concentrating: YourHealthStack4.
                      difficulty_concentrating,
                  heart_pound: YourHealthStack4.heart_pound,
                  memory: YourHealthStack4.memory,
                  nausea: YourHealthStack4.nausea,
                  sleeping_problems: YourHealthStack4.sleeping_problems,
                  talking_slow: YourHealthStack4.talking_slow,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  //  Your Health subsection  stack 5 send to db
  if (subSection ==='Your-Health' && stack === '5') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(YourHealthStack5);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 3) {
          if ( valuesArray[i]) {
            YourHealthStack5[objectKeys[i]] = valuesArray[i].response;
          } else {
            YourHealthStack5[objectKeys[i]] = null;
          }
        }
      }
      YourHealthStack5.id = uniqueId;
      YourHealthStack5.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.YourHealth.stack5,
              {
                createYour_health_stack5Input: {
                  formid: YourHealthStack5.formid,
                  id: YourHealthStack5.id,
                  uncontrollable_anxiety: YourHealthStack5.
                      uncontrollable_anxiety,
                  stomach_pain: YourHealthStack5.stomach_pain,
                  neck_pain: YourHealthStack5.neck_pain,
                  headache: YourHealthStack5.headache,
                  back_pain: YourHealthStack5.back_pain,
                  chest_pain: YourHealthStack5.chest_pain,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  //  Your Health subsection  stack 6 send to db
  if (subSection ==='Your-Health' && stack === '6') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(YourHealthStack6);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 3) {
          if ( valuesArray[i]) {
            if (i === 0) {
              YourHealthStack6[objectKeys[i]] = valuesArray[i].response;
            }
            YourHealthStack6[objectKeys[i]] = parseInt(
                valuesArray[i].response,
            );
          } else {
            YourHealthStack6[objectKeys[i]] = null;
          }
        }
      }
      YourHealthStack6.id = uniqueId;
      YourHealthStack6.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.YourHealth.stack6,
              {
                createYour_health_stack6Input: {
                  formid: YourHealthStack6.formid,
                  id: YourHealthStack6.id,
                  energy_scale: YourHealthStack6.energy_scale,
                  hours_sleep: YourHealthStack6.hours_sleep,
                  how_long_sleep_problems: YourHealthStack6.
                      how_long_sleep_problems,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  //  Your Health subsection  stack 7 send to db
  if (subSection ==='Your-Health' && stack === '7') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(YourHealthStack7);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 3) {
          if ( valuesArray[i]) {
            if (i === 2) {
              YourHealthStack7[objectKeys[i]] = parseInt(
                  valuesArray[i].response,
              );
            }
            YourHealthStack7[objectKeys[i]] = valuesArray[i].response;
          } else {
            YourHealthStack7[objectKeys[i]] = null;
          }
        }
      }
      YourHealthStack7.id = uniqueId;
      YourHealthStack7.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.YourHealth.stack7,
              {
                createYour_health_stack7Input: {
                  formid: YourHealthStack7.formid,
                  id: YourHealthStack7.id,
                  how_long_headaches: YourHealthStack7.how_long_headaches,
                  pain_scale: YourHealthStack7.pain_scale,
                  how_long_pain: YourHealthStack7.how_long_pain,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  //  Your Health subsection  stack 8 send to db
  if (subSection ==='Your-Health' && stack === '8') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(YourHealthStack8);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 5) {
          if ( valuesArray[i]) {
            YourHealthStack8[objectKeys[i]] = parseInt(
                valuesArray[i].response,
            );
          } else {
            YourHealthStack8[objectKeys[i]] = null;
          }
        }
      }
      YourHealthStack8.id = uniqueId;
      YourHealthStack8.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.YourHealth.stack8,
              {
                createYour_health_stack8Input: {
                  formid: YourHealthStack8.formid,
                  id: YourHealthStack8.id,
                  ability_work: YourHealthStack8.ability_work,
                  close_relationships: YourHealthStack8.close_relationships,
                  home_management: YourHealthStack8.home_management,
                  quality_of_work: YourHealthStack8.quality_of_work,
                  social: YourHealthStack8.social,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  //  Your Health subsection  stack 9 send to db
  if (subSection ==='Your-Health' && stack === '9') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(YourHealthStack9);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 2) {
          if ( valuesArray[i]) {
            YourHealthStack9[objectKeys[i]] = parseInt(
                valuesArray[i].response,
            );
          } else {
            YourHealthStack9[objectKeys[i]] = null;
          }
        }
      }
      YourHealthStack9.id = uniqueId;
      YourHealthStack9.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.YourHealth.stack9,
              {
                createYour_health_stack9Input: {
                  formid: YourHealthStack9.formid,
                  id: YourHealthStack9.id,
                  cut_back_work: YourHealthStack9.cut_back_work,
                  unable_to_work: YourHealthStack9.unable_to_work,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  /* eslint-disable */
//    _    _                  _   _     _         ____           _                       _
//   | |  | |                | | | |   | |       |  _ \         | |                     (_)
//   | |__| |   ___    __ _  | | | |_  | |__     | |_) |   ___  | |__     __ _  __   __  _    ___    _ __   ___
//   |  __  |  / _ \  / _` | | | | __| | '_ \    |  _ <   / _ \ | '_ \   / _` | \ \ / / | |  / _ \  | '__| / __|
//   | |  | | |  __/ | (_| | | | | |_  | | | |   | |_) | |  __/ | | | | | (_| |  \ V /  | | | (_) | | |    \__ \
//   |_|  |_|  \___|  \__,_| |_|  \__| |_| |_|   |____/   \___| |_| |_|  \__,_|   \_/   |_|  \___/  |_|    |___/
  /* eslint-enable */

  //  Health Behaviors subsection  stack 0 send to db
  if (subSection ==='Health-Behaviors' && stack === '0') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(HealthBehaviorsstack0);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 3) {
          if (valuesArray[i]) {
            if (i === 0) {
              console.log(objectKeys[i]);
              HealthBehaviorsstack0[objectKeys[i]] = valuesArray[i].response;
            } else {
              HealthBehaviorsstack0[objectKeys[i]] = parseInt(
                  valuesArray[i].response,
              );
            }
          } else {
            HealthBehaviorsstack0[objectKeys[i]] = null;
          }
        }
      }
      HealthBehaviorsstack0.id = uniqueId;
      HealthBehaviorsstack0.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.HealthBehaviors.stack0,
              {
                createHealth_behaviors_stack0Input: {
                  formid: HealthBehaviorsstack0.formid,
                  id: HealthBehaviorsstack0.id,
                  different_perscription: HealthBehaviorsstack0
                      .different_perscription,
                  how_many_visits: HealthBehaviorsstack0.how_many_visits,
                  regular_doctor: HealthBehaviorsstack0.regular_doctor,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  //  Health Behaviors subsection  stack 1 send to db
  if (subSection ==='Health-Behaviors' && stack === '1') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(HealthBehaviorsstack1);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 3) {
          if ( valuesArray[i]) {
            HealthBehaviorsstack1[objectKeys[i]] = parseInt(
                valuesArray[i].response,
            );
          } else {
            HealthBehaviorsstack1[objectKeys[i]] = null;
          }
        }
      }
      HealthBehaviorsstack1.id = uniqueId;
      HealthBehaviorsstack1.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Health.HealthBehaviors.stack1,
              {
                createHealth_behaviors_stack1Input: {
                  formid: HealthBehaviorsstack1.formid,
                  id: HealthBehaviorsstack1.id,
                  birth_control: HealthBehaviorsstack1.birth_control,
                  dietary_vitamins: HealthBehaviorsstack1.dietary_vitamins,
                  perscriped_opioid: HealthBehaviorsstack1.perscriped_opioid,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  /* eslint-disable */
//     ____                   _            _    _                  _   _
//    / __ \                 | |          | |  | |                | | | |
//   | |  | |  _ __    __ _  | |          | |__| |   ___    __ _  | | | |_
//   | |  | | | '__|  / _` | | |          |  __  |  / _ \  / _` | | | | __|
//   | |__| | | |    | (_| | | |          | |  | | |  __/ | (_| | | | | |_
//   \____/  |_|     \__,_| |_|          |_|  |_|  \___|  \__,_| |_|  \__|

  /* eslint-enable */

  //  Oral Healt subsection  stack 0 send to db
  if (subSection ==='Oral-Healt' && stack === '0') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(OralHealthStack0);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 3) {
          if ( valuesArray[i]) {
            OralHealthStack0[objectKeys[i]] = parseInt(
                valuesArray[i].response,
            );
          } else {
            OralHealthStack0[objectKeys[i]] = null;
          }
        }
      }
      OralHealthStack0.id = uniqueId;
      OralHealthStack0.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Mood.OralHealt.stack0,
              {
                createOral_health_stack0Input: {
                  formid: OralHealthStack0.formid,
                  id: OralHealthStack0.id,
                  dental_floss: OralHealthStack0.dental_floss,
                  brush_teeth: OralHealthStack0.brush_teeth,
                  mouthwash: OralHealthStack0.mouthwash,
                },
              },
          ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  //  Oral Healt subsection  stack 1 send to db
  if (subSection ==='Oral-Healt' && stack === '1') {
    try {
      const valuesArray = Object.values(questions).map((question)=>{
        return question;
      }).sort(
          (a, b)=>{
            return a.order - b.order;
          },
      );
      const objectKeys = Object.keys(OralHealthStack1);
      for (let i = 0; i < objectKeys.length; i++) {
        if (i < 2) {
          if ( valuesArray[i]) {
            OralHealthStack1[objectKeys[i]] = parseInt(
                valuesArray[i].response,
            );
          } else {
            OralHealthStack1[objectKeys[i]] = null;
          }
        }
      }
      OralHealthStack1.id = uniqueId;
      OralHealthStack1.formid = formId;
      await API.graphql(
          graphqlOperation(
              queryConstants.Mood.OralHealt.stack1,
              {
                createOral_health_stack1Input: {
                  formid: OralHealthStack1.formid,
                  id: OralHealthStack1.id,
                  days_floss: OralHealthStack1.days_floss,
                  days_mouthwash: OralHealthStack1.days_mouthwash,
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
