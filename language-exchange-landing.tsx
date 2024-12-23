import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LanguageExchangeLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col">
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
          <span className="ml-2 text-xl font-bold text-gray-800">글로벌 언어 익스체인지</span>
        </div>
        <nav className="space-x-4">
          <a href="#" className="hover:text-blue-600">소개</a>
          <a href="#" className="hover:text-blue-600">어떻게 works</a>
          <a href="#" className="hover:text-blue-600">문의</a>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
            새로운 언어, 새로운 친구
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            전 세계 사람들과 언어를 배우고 문화를 공유하세요. 
            즐겁고 효과적인 언어 교환 플랫폼입니다.
          </p>
          
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              지금 시작하기
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600">
              더 알아보기
            </Button>
          </div>

          <div className="mt-12 flex justify-center space-x-8">
            <Card className="w-64 p-4 text-center shadow-lg">
              <CardContent>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-blue-600 mb-4">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <h3 className="font-bold text-lg mb-2">개인 매칭</h3>
                <p className="text-gray-600">
                  관심사와 언어 레벨에 맞는 파트너를 연결해드려요
                </p>
              </CardContent>
            </Card>

            <Card className="w-64 p-4 text-center shadow-lg">
              <CardContent>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-600 mb-4">
                  <path d="M12 2a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5 5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z"/>
                  <path d="M19 15v3a7 7 0 1 1-14 0v-3"/>
                </svg>
                <h3 className="font-bold text-lg mb-2">실시간 대화</h3>
                <p className="text-gray-600">
                  화상 채팅과 메시징으로 언어를 생생하게 배워요
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-gray-500">
        © 2024 글로벌 언어 익스체인지. All rights reserved.
      </footer>
    </div>
  );
};

export default LanguageExchangeLanding;
