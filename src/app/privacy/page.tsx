import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-ocean-950">
      <Nav />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Privacy Policy
        </h1>
        
        <div className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-8">
          <p className="mb-6">
            Last updated: May 15, 2026
          </p>
          
          <p className="mb-4">
            This privacy policy describes how OndeTalk ("we", "our", or "us") handles your information when you use our applications and services.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mb-4">What data we collect</h2>
          <ul className="text-slate-400 list-disc list-inside mb-6">
            <li>
              <strong>Dictations:</strong> Your voice recordings and transcribed text are processed locally by default. If you enable cloud sync, encrypted dictations are stored in your chosen cloud provider (Supabase or Google Drive).
            </li>
            <li>
              <strong>Project metadata:</strong> When using AI Projects, we analyze your dictations to generate project cards (status, roadmap, next steps). This analysis is performed by AI providers (Cerebras, Groq, or OpenAI) and the results are stored locally.
            </li>
            <li>
              <strong>Sync token:</strong> If you enable cloud sync, we store an encrypted token to access your cloud storage provider. We do not access your cloud storage beyond the designated sync folder.
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mb-4">Where your data is stored</h2>
          <ul className="text-slate-400 list-disc list-inside mb-6">
            <li>
              <strong>Local storage (default):</strong> All data (dictations, projects, settings) is stored in an SQLite database on your machine. This is the default and recommended setting for maximum privacy.
            </li>
            <li>
              <strong>Optional cloud sync:</strong> If you enable sync, we encrypt and store your dictations in your chosen cloud provider:
              <ul className="list-disc list-inside pl-5 mt-2">
                <li>Supabase: Encrypted in your Supabase storage bucket</li>
                <li>Google Drive: Encrypted in a designated folder in your Google Drive</li>
              </ul>
              We never store your data on our servers.
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mb-4">Provider data flows</h2>
          <ul className="text-slate-400 list-disc list-inside mb-6">
            <li>
              <strong>AI Projects (optional):</strong> When you enable AI Projects and provide an API key, we send your dictation text to the selected AI provider (Cerebras, Groq, or OpenAI) solely for the purpose of generating project summaries and next steps. Your data is not used for training by these providers (subject to their terms).
            </li>
            <li>
              <strong>Google OAuth (optional):</strong> If you sign in with Google to enable cloud sync, we use Google's OAuth service to authenticate and obtain limited access to your Google Drive (if selected) or Supabase (via our backend). We only request the scope necessary for sync functionality.
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mb-4">Your rights</h2>
          <ul className="text-slate-400 list-disc list-inside mb-6">
            <li>
              <strong>Export:</strong> You can export your dictations and project data at any time from the Settings → Diagnostics → Export logs feature.
            </li>
            <li>
              <strong>Delete:</strong> You can delete all local data by clearing the app cache (Settings → About → Clear cache). For synced data, you must delete it from your cloud provider.
            </li>
            <li>
              <strong>Opt-out:</strong> You can disable AI Projects and cloud sync at any time in Settings. Disabling these features stops all data flows to external providers.
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
          <p className="text-slate-400 mb-4">
            If you have any questions about this privacy policy, please contact us at:
          </p>
          <p className="font-mono text-slate-300">
            freeriverhouse@gmail.com
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}