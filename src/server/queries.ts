import { auth } from "@clerk/nextjs/server";
import "server-only";
import { db } from "~/server/db";

/**
 * Get only authenticated user images.
* */
export async function getMyImages() {

  // Auth call
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
}


export async function getImage(id: number) {

  // Auth call
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");
  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });
  if (!image) throw new Error("Image not found");
  // Remove comment below to remove sharing image feature
  //if (image.userId !== user.userId) throw new Error("Unauthoried access.");
  return image;
}
