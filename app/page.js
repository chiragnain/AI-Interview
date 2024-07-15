import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ backgroundImage: "url('/front.png')", height: '90vh', backgroundSize: 'cover' }} className="flex justify-center">
      <Link href="/dashboard">
        <Button style={{ padding: '40px 80px', fontSize: '20px'}}>Open Dashboard</Button>
      </Link>
    </div>
  );
}
