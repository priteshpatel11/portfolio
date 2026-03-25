import { redirect } from "next/navigation";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default function BlogPage() {
  redirect("https://www.bhaveshpatel.xyz");
}
