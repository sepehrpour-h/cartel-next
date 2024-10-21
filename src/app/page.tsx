import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/auth/login');  // هدایت به صفحه ورود
  return null;  
}
