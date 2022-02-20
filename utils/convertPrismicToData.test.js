import convertPrismicToData from "./convertPrismicToData";

test("if it works with simple data", () => {
  expect(
    convertPrismicToData({
      id: "YhIPVxEAAC0AqCuS",
      uid: "blog-post-1",
      url: null,
      type: "blog_post",
      href: "https://cakurang-try-prismic.cdn.prismic.io/api/v2/documents/search?ref=YhI9JREAACoAqPAg&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YhIPVxEAAC0AqCuS%22%29+%5D%5D",
      tags: [],
      first_publication_date: "2022-02-20T09:52:44+0000",
      last_publication_date: "2022-02-20T13:07:11+0000",
      slugs: ["2022-02-18", "2022-02-20"],
      linked_documents: [],
      lang: "en-us",
      alternate_languages: [],
      data: {
        publish_date: "2022-02-18",
        title: "Blog Post",
        content: [
          {
            type: "paragraph",
            text: "This is actually my first blog with prismic :).",
            spans: [],
          },
        ],
      },
    })
  ).toEqual({
    date: "2022-02-18",
    slug: "blog-post-1",
    title: "Blog Post",
    contents: "This is actually my first blog with prismic :).",
  });
});

test("if it works without a date", () => {
  expect(
    convertPrismicToData({
      id: "YhIPVxEAAC0AqCuS",
      uid: "blog-post-1",
      url: null,
      type: "blog_post",
      href: "https://cakurang-try-prismic.cdn.prismic.io/api/v2/documents/search?ref=YhI9JREAACoAqPAg&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YhIPVxEAAC0AqCuS%22%29+%5D%5D",
      tags: [],
      first_publication_date: "2022-02-20T09:52:44+0000",
      last_publication_date: "2022-02-20T13:07:11+0000",
      slugs: ["2022-02-18", "2022-02-20"],
      linked_documents: [],
      lang: "en-us",
      alternate_languages: [],
      data: {
        title: "Blog Post",
        content: [
          {
            type: "paragraph",
            text: "This is actually my first blog with prismic :).",
            spans: [],
          },
        ],
      },
    })
  ).toEqual({
    date: null,
    slug: "blog-post-1",
    title: "Blog Post",
    contents: "This is actually my first blog with prismic :).",
  });
});

test("if it works with complex data", () => {
  expect(
    convertPrismicToData({
      id: "YhIP1hEAAC4AqC4j",
      uid: "blog-post-2",
      url: null,
      type: "blog_post",
      href: "https://cakurang-try-prismic.cdn.prismic.io/api/v2/documents/search?ref=YhJJlxEAAC8AqSfi&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YhIP1hEAAC4AqC4j%22%29+%5D%5D",
      tags: [],
      first_publication_date: "2022-02-20T09:54:43+0000",
      last_publication_date: "2022-02-20T14:00:55+0000",
      slugs: ["2022-02-20", "2022-02-18"],
      linked_documents: [],
      lang: "en-us",
      alternate_languages: [],
      data: {
        publish_date: "2022-02-20",
        title: "My second post",
        content: [
          {
            type: "paragraph",
            text: "\nFirst paragraph.",
            spans: [],
          },
          {
            type: "paragraph",
            text: "Second paragraph with bold and italic.",
            spans: [
              {
                start: 22,
                end: 26,
                type: "strong",
              },
              {
                start: 31,
                end: 37,
                type: "em",
              },
            ],
          },
          {
            type: "list-item",
            text: "First Item",
            spans: [],
          },
          {
            type: "list-item",
            text: "Second item",
            spans: [],
          },
        ],
      },
    })
  ).toEqual({
    date: "2022-02-20",
    slug: "blog-post-2",
    title: "My second post",
    contents: `
First paragraph.

Second paragraph with **bold** and *italic*.

- First Item
- Second item`,
  });
});
