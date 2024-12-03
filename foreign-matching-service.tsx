import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ForeignMatchingService = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [language, setLanguage] = useState('');
  const [interests, setInterests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 매칭 로직 추가 가능
    console.log('프로필 제출:', { name, age, language, interests });
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            외국인 언어 교환 매칭 서비스
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">이름</label>
              <Input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력하세요"
                required
              />
            </div>

            <div>
              <label className="block mb-2">나이</label>
              <Input 
                type="number" 
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="나이를 입력하세요"
                required
                min="18"
                max="99"
              />
            </div>

            <div>
              <label className="block mb-2">학습 희망 언어</label>
              <Select onValueChange={setLanguage} value={language}>
                <SelectTrigger>
                  <SelectValue placeholder="언어를 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">영어</SelectItem>
                  <SelectItem value="chinese">중국어</SelectItem>
                  <SelectItem value="japanese">일본어</SelectItem>
                  <SelectItem value="spanish">스페인어</SelectItem>
                  <SelectItem value="french">프랑스어</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block mb-2">관심사</label>
              <Input 
                type="text" 
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                placeholder="관심사를 입력하세요 (예: 영화, 음악, 요리)"
              />
            </div>

            <Button type="submit" className="w-full">
              매칭 시작하기
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForeignMatchingService;
