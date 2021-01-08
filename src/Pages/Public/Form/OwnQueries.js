export const getQuestionsOfASection = /* GraphQL */ `
query ListQuestionsOfSection(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
) {
  listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      name
      id
      questions {
        items {
          question
          items
          id
          category {
            name
            id
          }
        }
      }
    }
  }
}
`;
