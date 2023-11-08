'use client';
 
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()
  
  return (
    <div>
      <button
      className="px-12 py-4 border rounded-xl bg-yellow-300"
      onClick={()=>router.push('/login')}
      >
      로그인 페이지
      </button>
      <button
      className="px-12 py-4 border rounded-xl bg-yellow-300"
      onClick={()=>router.push('/register')}
      >
      회원가입 페이지
      </button>
    </div>
  );
}