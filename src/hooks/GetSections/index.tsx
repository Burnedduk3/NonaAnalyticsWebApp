import { useEffect, useState } from 'react';
import { ISection, ISubSection } from '../../Context/FormQuestions/interface';
import { GET_ALL_SECTIONS } from '../../Config/api/Graphql/QuerySintax';
import { useQuery } from '@apollo/client';
import { FetchchedSectionsAPI } from '../../Config/api/Graphql/Types';

export const useSectionsAndSubSections = () => {
  const [sections, setSections] = useState<ISection[] | null>(null);
  const { loading, error, data } = useQuery(GET_ALL_SECTIONS);

  useEffect(() => {
    try {
      if (!error && data) {
        const fetchedData: FetchchedSectionsAPI = data;
        if (!fetchedData.SettingUpFormQueries.General.getAllSections.error) {
          const sectionArray: ISection[] = fetchedData.SettingUpFormQueries.General.getAllSections.data.map(
            (fetchedSection): ISection => {
              const subSections = fetchedSection.subSections.map(
                (fetchedSubSection): ISubSection => {
                  return {
                    maxStack: 0,
                    name: fetchedSubSection.name,
                    order: fetchedSubSection.order,
                    questions: [],
                    id: fetchedSubSection.id,
                  };
                }
              );
              return {
                order: fetchedSection.order,
                name: fetchedSection.name,
                subSections: subSections,
                id: fetchedSection.id,
              };
            }
          );
          setSections(sectionArray);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [loading]);

  return sections;
};
