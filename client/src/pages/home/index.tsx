import { CustomButton } from "@/components/custom/button";

type User = {}

export default function HomePage() {
  const user: User = 5;

  console.log(user);
  
  return (
    <main>
      <CustomButton />
    </main>
  );
}
