export const getQuestionsOfASection = /* GraphQL */ `
query ListQuestionsOfSection(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
) {
  listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      questions {
        items {
          id
          items
          question
          category {
            name
          }
        }
      }
    }
  }
}
`;

export const getSectionsWithQuestions = /* GraphQL */ `
  query ListSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
      listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
        name
        id
        order
        subSections {
            items {
                id
                name
                order
                questions {
                    items {
                        id
                        items
                        question
                        stack
                        stackPhrase
                        placeHolder
                        imagesPath
                        order
                        category {
                            id
                            name
                        }
                    }
                }
            }
        }
      }
    }
   }
`;
