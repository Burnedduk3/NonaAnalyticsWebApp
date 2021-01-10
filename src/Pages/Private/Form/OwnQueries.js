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
