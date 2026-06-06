async function createCategory() {

  if (!newCategoryName) {
    return;
  }

  const response =
    await fetch(
      "/api/save-marketing-category",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify({
            name:
              newCategoryName,
          }),
      }
    );

  const data =
    await response.json();

  if (
    data.success
  ) {

    setMarketingCategories([
      ...marketingCategories,
      {
        navn:
          data.category.name,

        region:
          "Marketing",
      },
    ]);
  }

  setShowCreateModal(
    false
  );

  setNewCategoryName(
    ""
  );
}
