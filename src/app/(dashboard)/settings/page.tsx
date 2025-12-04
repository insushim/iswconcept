'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import { User, Settings, Bell, Palette, Save, Loader2 } from 'lucide-react';
import type { User as SupabaseUser } from '@supabase/supabase-js';

interface UserProfile {
  id: string;
  name: string;
  school_name?: string;
  default_grade?: number;
  default_subject?: string;
}

export default function SettingsPage() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 설정 상태
  const [settings, setSettings] = useState({
    name: '',
    schoolName: '',
    defaultGrade: '',
    defaultSubject: '',
    notifications: true,
    autoSave: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data: profileData } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profileData) {
          setProfile(profileData);
          setSettings({
            name: profileData.name || '',
            schoolName: profileData.school_name || '',
            defaultGrade: profileData.default_grade?.toString() || '',
            defaultSubject: profileData.default_subject || '',
            notifications: true,
            autoSave: true,
          });
        }
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const handleSave = async () => {
    if (!user) return;

    setSaving(true);
    try {
      const supabase = createClient();

      const { error } = await supabase
        .from('users')
        .update({
          name: settings.name,
          school_name: settings.schoolName || null,
          default_grade: settings.defaultGrade ? parseInt(settings.defaultGrade) : null,
          default_subject: settings.defaultSubject || null,
        })
        .eq('id', user.id);

      if (error) throw error;

      toast({
        title: '설정 저장 완료',
        description: '설정이 성공적으로 저장되었습니다.',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: '저장 실패',
        description: '설정 저장 중 오류가 발생했습니다.',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold">설정</h1>
        <p className="text-muted-foreground">계정 및 애플리케이션 설정을 관리합니다.</p>
      </div>

      {/* 프로필 설정 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            프로필 설정
          </CardTitle>
          <CardDescription>기본 프로필 정보를 설정합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" value={user?.email || ''} disabled />
            <p className="text-xs text-muted-foreground">
              이메일은 변경할 수 없습니다.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              value={settings.name}
              onChange={(e) => setSettings({ ...settings, name: e.target.value })}
              placeholder="이름을 입력하세요"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="schoolName">학교명</Label>
            <Input
              id="schoolName"
              value={settings.schoolName}
              onChange={(e) =>
                setSettings({ ...settings, schoolName: e.target.value })
              }
              placeholder="학교명을 입력하세요"
            />
          </div>
        </CardContent>
      </Card>

      {/* 기본값 설정 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            기본값 설정
          </CardTitle>
          <CardDescription>
            새 수업 생성 시 기본으로 사용될 값을 설정합니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>기본 학년</Label>
              <Select
                value={settings.defaultGrade}
                onValueChange={(value) =>
                  setSettings({ ...settings, defaultGrade: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="학년 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">선택 안 함</SelectItem>
                  {[3, 4, 5, 6].map((grade) => (
                    <SelectItem key={grade} value={grade.toString()}>
                      {grade}학년
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>기본 과목</Label>
              <Select
                value={settings.defaultSubject}
                onValueChange={(value) =>
                  setSettings({ ...settings, defaultSubject: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="과목 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">선택 안 함</SelectItem>
                  <SelectItem value="국어">국어</SelectItem>
                  <SelectItem value="수학">수학</SelectItem>
                  <SelectItem value="사회">사회</SelectItem>
                  <SelectItem value="과학">과학</SelectItem>
                  <SelectItem value="영어">영어</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 알림 설정 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            알림 설정
          </CardTitle>
          <CardDescription>알림 및 자동 저장 옵션을 설정합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">알림 받기</p>
              <p className="text-sm text-muted-foreground">
                수업 생성 완료 시 알림을 받습니다.
              </p>
            </div>
            <Switch
              checked={settings.notifications}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, notifications: checked })
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">자동 저장</p>
              <p className="text-sm text-muted-foreground">
                편집 중 변경사항을 자동으로 저장합니다.
              </p>
            </div>
            <Switch
              checked={settings.autoSave}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, autoSave: checked })
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* 저장 버튼 */}
      <Button onClick={handleSave} disabled={saving} className="w-full">
        {saving ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            저장 중...
          </>
        ) : (
          <>
            <Save className="mr-2 h-4 w-4" />
            설정 저장
          </>
        )}
      </Button>
    </div>
  );
}
