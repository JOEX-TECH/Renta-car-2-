import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; [cite: 4]
import PageNotFound from './lib/PageNotFound'; [cite: 5]
import { AuthProvider, useAuth } from '@/lib/AuthContext'; [cite: 5]
import UserNotRegisteredError from '@/components/UserNotRegisteredError'; [cite: 5]
import { LanguageProvider } from '@/lib/LanguageContext'; [cite: 6]
import Home from '@/pages/Home'; [cite: 6]

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth(); [cite: 7]

  if (isLoadingPublicSettings || isLoadingAuth) { [cite: 8]
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    ); [cite: 8]
  } [cite: 9]

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin(); [cite: 9]
      return null; [cite: 10]
    }
  }

  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </LanguageProvider>
  ); [cite: 10]
}; [cite: 11]

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
          <Toaster />
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
