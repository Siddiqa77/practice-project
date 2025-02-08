export const blogpage = {
  name: "blogs",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "id",
      title: "Product ID",
      type: "string",
      validation: (Rule: any) =>
        Rule.required().error("Product ID is required"),
    },
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: any) => Rule.required().error("Name is required"),
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      validation: (Rule: any) =>
        Rule.required()
          .min(0)
          .error("Price is required and must be a positive number"),
    },
    {
      name: "discountPercentage",
      type: "number",
      title: "Discount Percentage",
      validation: (Rule: any) =>
        Rule.min(0).max(100).warning("Discount must be between 0 and 100."),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "subname",
      type: "string",
      title: "Subname",
      validation: (Rule: any) => Rule.required().error("Subname is required"),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule: any) =>
        Rule.max(150).warning("Keep the description under 150 characters."),
    },

    {
      name: "date",
      title: "Date",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
      },
      validation: (Rule: any) => Rule.required().error("Date is required"),
    },
  ],
};
