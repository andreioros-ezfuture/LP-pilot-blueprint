import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { LogOut, CheckCircle, XCircle, Clock, RefreshCw, Mail, Phone, Trash2 } from 'lucide-react';

interface Application {
  id: string;
  contact_name: string;
  email: string;
  phone: string | null;
  company_name: string;
  pain_points: string;
  status: string;
  created_at: string;
  reviewed_at: string | null;
}

export function AdminDashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchApplications();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin');
      return;
    }

    const { data: roleData } = await supabase
      .from('users')
      .select('role')
      .eq('id', session.user.id)
      .single();

    if (roleData?.role !== 'super_admin') {
      await supabase.auth.signOut();
      navigate('/admin');
    }
  };

  const fetchApplications = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('pilot_applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setApplications(data);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, status: 'pending' | 'accepted' | 'rejected') => {
    setUpdating(id);
    const { error } = await supabase
      .from('pilot_applications')
      .update({ status, reviewed_at: new Date().toISOString() })
      .eq('id', id);

    if (!error) {
      setApplications(prev =>
        prev.map(app => app.id === id ? { ...app, status, reviewed_at: new Date().toISOString() } : app)
      );
    }
    setUpdating(null);
  };

  const deleteApplication = async (id: string, companyName: string) => {
    if (!confirm(`Sigur vrei să ștergi aplicația de la "${companyName}"?`)) return;
    setUpdating(id);
    const { error } = await supabase
      .from('pilot_applications')
      .delete()
      .eq('id', id);

    if (!error) {
      setApplications(prev => prev.filter(app => app.id !== id));
    }
    setUpdating(null);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  const approved = applications.filter(a => a.status === 'accepted').length;
  const pending = applications.filter(a => a.status === 'pending').length;
  const remaining = 10 - approved;

  const statusIcon = (status: string) => {
    switch (status) {
      case 'accepted': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'rejected': return <XCircle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-amber-500" />;
    }
  };

  const statusLabel = (status: string) => {
    switch (status) {
      case 'accepted': return 'Aprobat';
      case 'rejected': return 'Respins';
      default: return 'În așteptare';
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('ro-RO', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-gray-900">Blueprint Pilot — Aplicații</h1>
            <div className="flex gap-4 mt-1 text-sm">
              <span className="text-gray-500">{applications.length} total</span>
              <span className="text-amber-600 font-medium">{pending} în așteptare</span>
              <span className="text-green-600 font-medium">{approved} aprobate</span>
              <span className="text-gray-900 font-bold">{remaining} locuri rămase</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchApplications}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              title="Reîncarcă"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {loading ? (
          <div className="text-center py-20">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto" />
            <p className="text-sm text-gray-500 mt-3">Se încarcă...</p>
          </div>
        ) : applications.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500">Nicio aplicație încă.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {applications.map((app) => (
              <div key={app.id} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-gray-900">{app.contact_name}</h3>
                      <span className="text-sm text-gray-500">—</span>
                      <span className="font-semibold text-gray-700">{app.company_name}</span>
                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100">
                        {statusIcon(app.status)}
                        {statusLabel(app.status)}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <a href={`mailto:${app.email}`} className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline">
                        <Mail className="w-3.5 h-3.5" />
                        {app.email}
                      </a>
                      {app.phone && (
                        <a href={`tel:${app.phone}`} className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline">
                          <Phone className="w-3.5 h-3.5" />
                          {app.phone}
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">{app.pain_points}</p>
                    <p className="text-xs text-gray-400 mt-2">{formatDate(app.created_at)}</p>
                  </div>

                  <div className="flex gap-2 flex-shrink-0">
                    {app.status === 'pending' && (
                      <>
                        <button
                          onClick={() => updateStatus(app.id, 'accepted')}
                          disabled={updating === app.id || remaining <= 0}
                          className="flex items-center gap-1.5 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Aprobă
                        </button>
                        <button
                          onClick={() => updateStatus(app.id, 'rejected')}
                          disabled={updating === app.id}
                          className="flex items-center gap-1.5 px-4 py-2 bg-white text-red-600 text-sm font-semibold rounded-lg border border-red-200 hover:bg-red-50 transition-colors disabled:opacity-50"
                        >
                          <XCircle className="w-4 h-4" />
                          Respinge
                        </button>
                      </>
                    )}
                    {(app.status === 'accepted' || app.status === 'rejected') && (
                      <button
                        onClick={() => updateStatus(app.id, 'pending')}
                        disabled={updating === app.id}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-gray-500 text-xs font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Anulează
                      </button>
                    )}
                    <button
                      onClick={() => deleteApplication(app.id, app.company_name)}
                      disabled={updating === app.id}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-red-400 text-xs font-medium rounded-lg border border-red-100 hover:bg-red-50 hover:text-red-600 transition-colors disabled:opacity-50"
                      title="Șterge aplicația"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
