import richTextToMarkdown from "@edwinjoseph/prismic-richtext-markdown";

const emptySpaceRegex = /^(- .*)\n(\n^- )/gm;
export default function convertPrismicToData(prismic) {
  return {
    date: prismic.data.publish_date || null,
    slug: prismic.uid,
    title: prismic.data.title,
    contents: richTextToMarkdown(prismic.data.content).replace(
      emptySpaceRegex,
      "$1$2"
    ),
  };
}
