import { PullPageImageView } from "~/app/_components/fullImagePage";

export default function FullImagePage({
  params: { id: photoId },
}: {
  params: { id: string },
}) {
  // turn id to number;
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");
  return (
    <PullPageImageView id={idAsNumber} />
  )
}


