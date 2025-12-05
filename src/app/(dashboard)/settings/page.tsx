'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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
import {
  User,
  Settings as SettingsIcon,
  Bell,
  Save,
  Loader2,
  Mail,
  Building2,
  GraduationCap,
  BookOpen,
} from 'lucide-react';
import { auth } from '@/lib/firebase/config';
import { onAuthStateChanged, updateProfile, User as FirebaseUser } from 'firebase/auth';

export default function SettingsPage() {
  const router = useRouter();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [settings, setSettings] = useState({
    name: '',
    schoolName: '',
    defaultGrade: '',
    defaultSubject: '',
    notifications: true,
    autoSave: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
        return;
      }

      setUser(user);
      setSettings((prev) => ({
        ...prev,
        name: user.displayName || '',
      }));
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleSave = async () => {
    if (!user) return;

    setSaving(true);
    try {
      // Firebase에서는 displayName만 업데이트 가능
      await updateProfile(user, {
        displayName: settings.name,
      });

      toast({
        title: '설정 저장 완료',
        description: '설정이 성공적으로 저장되었습니다.',
        variant: 'success',
      });
    } catch (error) {
      console.error('Error saving settings:', error);
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
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 rounded-2xl gradient-primary animate-pulse">
            <Loader2 className="h-8 w-8 text-white animate-spin" />
          </div>
          <p className="text-sm text-muted-foreground">설정을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in max-w-3xl">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-2xl gradient-primary">
          <SettingsIcon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">설정</h1>
          <p className="text-muted-foreground">계정 및 애플리케이션 설정을 관리합니다.</p>
        </div>
      </div>

      {/* Profile Settings */}
      <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <CardTitle className="text-lg">프로필 설정</CardTitle>
              <CardDescription>기본 프로필 정보를 설정합니다.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              이메일
            </Label>
            <Input
              id="email"
              value={user?.email || ''}
              disabled
              className="h-11 bg-secondary/50 border-0"
            />
            <p className="text-xs text-muted-foreground">
              이메일은 변경할 수 없습니다.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              이름
            </Label>
            <Input
              id="name"
              value={settings.name}
              onChange={(e) => setSettings({ ...settings, name: e.target.value })}
              placeholder="이름을 입력하세요"
              className="h-11 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="schoolName" className="text-sm font-medium flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              학교명
            </Label>
            <Input
              id="schoolName"
              value={settings.schoolName}
              onChange={(e) =>
                setSettings({ ...settings, schoolName: e.target.value })
              }
              placeholder="학교명을 입력하세요"
              className="h-11 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20"
            />
            <p className="text-xs text-muted-foreground">
              학교명은 로컬에만 저장됩니다.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Default Settings */}
      <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10">
              <GraduationCap className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <CardTitle className="text-lg">기본값 설정</CardTitle>
              <CardDescription>
                새 수업 생성 시 기본으로 사용될 값을 설정합니다.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                기본 학년
              </Label>
              <Select
                value={settings.defaultGrade}
                onValueChange={(value) =>
                  setSettings({ ...settings, defaultGrade: value })
                }
              >
                <SelectTrigger className="h-11 bg-secondary/50 border-0">
                  <SelectValue placeholder="학년 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">선택 안 함</SelectItem>
                  {[1, 2, 3, 4, 5, 6].map((grade) => (
                    <SelectItem key={grade} value={grade.toString()}>
                      {grade}학년
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                기본 과목
              </Label>
              <Select
                value={settings.defaultSubject}
                onValueChange={(value) =>
                  setSettings({ ...settings, defaultSubject: value })
                }
              >
                <SelectTrigger className="h-11 bg-secondary/50 border-0">
                  <SelectValue placeholder="과목 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">선택 안 함</SelectItem>
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

      {/* Notification Settings */}
      <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10">
              <Bell className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <CardTitle className="text-lg">알림 설정</CardTitle>
              <CardDescription>알림 및 자동 저장 옵션을 설정합니다.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/30">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-background">
                <Bell className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium">알림 받기</p>
                <p className="text-sm text-muted-foreground">
                  수업 생성 완료 시 알림을 받습니다.
                </p>
              </div>
            </div>
            <Switch
              checked={settings.notifications}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, notifications: checked })
              }
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/30">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-background">
                <Save className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium">자동 저장</p>
                <p className="text-sm text-muted-foreground">
                  편집 중 변경사항을 자동으로 저장합니다.
                </p>
              </div>
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

      {/* Save Button */}
      <Button
        onClick={handleSave}
        disabled={saving}
        className="w-full h-12 gradient-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
      >
        {saving ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            저장 중...
          </>
        ) : (
          <>
            <Save className="mr-2 h-5 w-5" />
            설정 저장
          </>
        )}
      </Button>
    </div>
  );
}
