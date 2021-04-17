import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";
import { useCMS } from "tinacms";
import { InlineText, InlineImage } from "react-tinacms-inline";
import CoverImage from "../components/cover-image";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  preview,
}) {
  useCMS();
  return (
    <>
      <PostTitle>
        <InlineText name="title" />
      </PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar
          name={author.name}
          picture={process.env.STRAPI_URL + author.picture.url}
        />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        {preview ? (
          <InlineImage
            name="coverImage.id"
            uploadDir={() => "/"}
            parse={(media) => media.id}
          >
            {() => (
              <img
                src={coverImage}
                alt={`Cover Image for ${title}`}
                title={`Cover Image for ${title}`}
              />
            )}
          </InlineImage>
        ) : (
          /* @ts-ignore */
          <CoverImage
            title={title}
            src={coverImage}
            height={620}
            width={1240}
          />
        )}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6 md:hidden">
          <Avatar
            name={author.name}
            picture={process.env.STRAPI_URL + author.picture.url}
          />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
