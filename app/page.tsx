import Image from "next/image";
import ImageUpload from "./pages/upload";
export default function Home() {
  return (
    <div>
      <h1>Upload to convert the iamage</h1>
      <ImageUpload />
    </div>
  );
}
