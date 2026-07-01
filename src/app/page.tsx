'use client';
import React, { useState } from 'react';

export default function Home() {
  // ১. কোর টিম মেম্বারস (Owner, 4 Admins, 1 Moderator)
  const coreTeam = [
    { 
      name: "Md Nazibul Hasan", // 👈 এখানে তোমার নাম বসাবে
      role: "Owner", 
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
      tone: "Executive Producer & Lead Director", 
      language: "Bengali & English",
      experience: "Founder & Studio Head",
      bio: "Managing the entire dubbing operations, client relations, and quality control of the studio."
    },
    { 
      name: "Md Mehedi Alam", 
      role: "Admin", 
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      tone: "Deep, Dramatic, Commercial Voice Specialist", 
      language: "Bengali",
      experience: "Senior Artist & Coordinator",
      bio: "Oversees audio schedules and voices major project leads and movie trailers."
    },
    { 
      name: "Admin Name 2", 
      role: "Admin", 
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      tone: "Soft, Emotional, Storytelling Expert", 
      language: "Bengali",
      experience: "Audio Engineer & Voice Artist",
      bio: "Expert in sound design, background music mixing, and emotional narration voice-overs."
    },
    { 
      name: "Admin Name 3", 
      role: "Admin", 
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      tone: "Energetic, Cartoon & Animation Voice Specialist", 
      language: "Bengali & Hindi",
      experience: "Dubbing Director",
      bio: "Specializes in character voicing for kids' content, anime, and high-energy scripts."
    },
    { 
      name: "Admin Name 4", 
      role: "Admin", 
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      tone: "Corporate, Documentary, Professional Narration", 
      language: "Bengali & English",
      experience: "Quality Checker & Artist",
      bio: "Handles high-end corporate dubbing projects and ensures zero glitches in master tracks."
    },
    { 
      name: "Moderator Name", 
      role: "Moderator", 
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      tone: "Crisp, Youthful, Social Media Content Specialist", 
      language: "Bengali",
      experience: "Community Manager & Support",
      bio: "Manages social platforms, reviews submissions, and coordinates between fans and the core team."
    }
  ];

  // ২. বর্ধিত ভয়েস আর্টিস্ট টিম (এখানে পুরো ৩০টি আলাদা স্লট করে দেওয়া হলো, তুমি পরে নাম এডিট করে নিবে)
  const generalArtists = [
    { name: "Voice Artist 1", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Energetic, Youthful, Friendly Tone", language: "Bengali", experience: "3 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 2", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Deep, Professional, Informative Voice", language: "Bengali", experience: "2 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 3", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Soft, Melodious, Storytelling Expert", language: "Bengali & English", experience: "4 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 4", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Deep, Bold, Movie Trailer Voice", language: "Bengali", experience: "5 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 5", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Energetic, Youthful, Friendly Tone", language: "Bengali", experience: "3 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 6", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Deep, Professional, Informative Voice", language: "Bengali", experience: "2 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 7", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Soft, Melodious, Storytelling Expert", language: "Bengali & English", experience: "4 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 8", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Deep, Bold, Movie Trailer Voice", language: "Bengali", experience: "5 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 9", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Energetic, Youthful, Friendly Tone", language: "Bengali", experience: "3 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 10", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Deep, Professional, Informative Voice", language: "Bengali", experience: "2 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 11", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Soft, Melodious, Storytelling Expert", language: "Bengali & English", experience: "4 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 12", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Deep, Bold, Movie Trailer Voice", language: "Bengali", experience: "5 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 13", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Energetic, Youthful, Friendly Tone", language: "Bengali", experience: "3 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 14", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Deep, Professional, Informative Voice", language: "Bengali", experience: "2 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 15", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Soft, Melodious, Storytelling Expert", language: "Bengali & English", experience: "4 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 16", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Deep, Bold, Movie Trailer Voice", language: "Bengali", experience: "5 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 17", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Energetic, Youthful, Friendly Tone", language: "Bengali", experience: "3 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 18", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Deep, Professional, Informative Voice", language: "Bengali", experience: "2 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 19", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Soft, Melodious, Storytelling Expert", language: "Bengali & English", experience: "4 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 20", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Deep, Bold, Movie Trailer Voice", language: "Bengali", experience: "5 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 21", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Energetic, Youthful, Friendly Tone", language: "Bengali", experience: "3 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 22", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Deep, Professional, Informative Voice", language: "Bengali", experience: "2 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 23", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Soft, Melodious, Storytelling Expert", language: "Bengali & English", experience: "4 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 24", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Deep, Bold, Movie Trailer Voice", language: "Bengali", experience: "5 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 25", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Energetic, Youthful, Friendly Tone", language: "Bengali", experience: "3 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 26", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Deep, Professional, Informative Voice", language: "Bengali", experience: "2 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 27", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Soft, Melodious, Storytelling Expert", language: "Bengali & English", experience: "4 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 28", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Deep, Bold, Movie Trailer Voice", language: "Bengali", experience: "5 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 29", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Energetic, Youthful, Friendly Tone", language: "Bengali", experience: "3 Yrs Exp", bio: "Professional voice talent." },
    { name: "Voice Artist 30", role: "Artist", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", tone: "Deep, Professional, Informative Voice", language: "Bengali", experience: "6 Yrs Exp", bio: "Professional voice talent." }
  ];

  const allMembers = [...coreTeam, ...generalArtists];

  // স্টেটস
  const [selectedMember, setSelectedMember] = useState<typeof allMembers[0] | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-purple-500 selection:text-white">
      
      {/* 🚀 HEADER / NAVBAR */}
      <header className="border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            LEGION_OF_VOCALS
          </span>
          <span className="text-xs bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded-full border border-neutral-700">DUB TEAM</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-400 font-medium">
          <a href="#team" className="hover:text-white transition-colors">Core Team</a>
          <a href="#roster" className="hover:text-white transition-colors">Voice Roster</a>
          <a href="#upload" className="hover:text-white transition-colors">Submit Video</a>
        </nav>
        <a href="#upload" className="bg-purple-600 hover:bg-purple-500 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full shadow-lg shadow-purple-500/20 transition-all">
          Upload Project
        </a>
      </header>

      {/* 🔥 HERO SECTION */}
      <section className="relative px-6 py-20 max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-purple-500/10 blur-[120px] rounded-full max-w-md mx-auto -z-10"></div>
        <span className="text-xs font-bold uppercase tracking-widest bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full mb-6">
          Premium Dubbing Ecosystem
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          The Voices Behind <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Our Studio
          </span>
        </h1>
        <p className="text-neutral-400 text-sm md:text-base max-w-xl">
          Click on any core management card or explore our complete 30+ artist roster below to view detailed profiles and audio samples.
        </p>
      </section>

      {/* 👥 SECTION 1: CORE TEAM (আগের মতো বড় গ্রিড বক্স স্টাইল) */}
      <section id="team" className="px-6 py-8 max-w-5xl mx-auto border-t border-neutral-900">
        <h2 className="text-xl font-bold mb-6 text-purple-400 tracking-tight flex items-center gap-2">
          ⚡ Core Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreTeam.map((member, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedMember(member)}
              className="bg-neutral-900/40 border border-neutral-900 rounded-xl p-5 hover:border-purple-500/40 transition-all cursor-pointer group hover:bg-neutral-900/80 flex items-center justify-between"
            >
              <div>
                <h3 className="text-md font-bold group-hover:text-purple-400 transition-colors">{member.name}</h3>
                <p className="text-xs text-neutral-500 mt-0.5">{member.experience}</p>
              </div>
              <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${member.badgeColor}`}>
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 🎙️ SECTION 2: EXTENDED VOICE ROSTER (৩০ জন আর্টিস্টের আলাদা কমপ্যাক্ট গ্যালারি) */}
      <section id="roster" className="px-6 py-12 max-w-5xl mx-auto border-t border-neutral-900">
        <h2 className="text-xl font-bold mb-6 text-emerald-400 tracking-tight">
          🎙️ Extended Voice Talents ({generalArtists.length} Artists)
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {generalArtists.map((member, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedMember(member)} 
              className="bg-neutral-900/20 border border-neutral-900/60 rounded-lg p-3 hover:border-emerald-500/40 transition-all cursor-pointer flex items-center justify-between group"
            >
              <div>
                <h4 className="text-xs font-semibold group-hover:text-emerald-400 transition-colors">{member.name}</h4>
                <p className="text-[10px] text-neutral-600">{member.experience}</p>
              </div>
              <span className="text-[8px] font-bold tracking-widest bg-emerald-500/5 text-emerald-400 border border-emerald-500/10 px-1.5 py-0.5 rounded">
                ARTIST
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 📤 SECTION 3: PUBLIC VIDEO DROPZONE */}
      <section id="upload" className="px-6 py-16 max-w-xl mx-auto border-t border-neutral-900 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">📤 Need Dubbing? Drop Your Video</h2>
        <p className="text-neutral-400 text-xs mb-8">Upload your video project or raw media files here. Our admin team will review it and match the absolute best voice talent for you.</p>
        
        <div className="bg-neutral-900/40 border-2 border-dashed border-neutral-800 hover:border-purple-500/40 rounded-2xl p-8 transition-all relative flex flex-col items-center justify-center group">
          <input type="file" accept="video/*" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
          
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎬</div>
          <p className="text-sm font-semibold mb-1">Click to upload or drag & drop</p>
          <p className="text-xs text-neutral-500">MP4, MKV, MOV up to 50MB</p>

          {uploadedFile && (
            <div className="mt-5 bg-purple-500/10 text-purple-400 border border-purple-500/20 px-4 py-2 rounded-xl text-xs font-medium animate-pulse">
              Selected: {uploadedFile.name} ({(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB)
            </div>
          )}
        </div>
      </section>

      {/* 🌟 PREMIUM POPUP MODAL (ক্লিক করলে সবার ফুল ডিটেইলস দেখাবে) */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-md overflow-hidden relative shadow-2xl">
            <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <button 
              onClick={() => setSelectedMember(null)} 
              className="absolute top-4 right-4 text-neutral-400 bg-neutral-950 border border-neutral-800 hover:text-white w-7 h-7 rounded-full text-xs transition-colors"
            >
              ✕
            </button>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold">{selectedMember.name}</h2>
                  <p className="text-xs text-neutral-500">{selectedMember.experience}</p>
                </div>
                <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded border ${selectedMember.badgeColor}`}>
                  {selectedMember.role}
                </span>
              </div>
              <div className="space-y-3 text-xs mb-5">
                <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-900">
                  <b className="text-purple-400 font-semibold uppercase tracking-wider text-[10px]">Vocal Profile:</b> 
                  <p className="italic mt-1 text-neutral-300">"{selectedMember.tone}"</p>
                </div>
                <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-900">
                  <b className="text-pink-400 font-semibold uppercase tracking-wider text-[10px]">Languages:</b> 
                  <p className="mt-1 text-neutral-300">{selectedMember.language}</p>
                </div>
                <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-900">
                  <b className="text-blue-400 font-semibold uppercase tracking-wider text-[10px]">Bio / Assignment:</b> 
                  <p className="text-neutral-400 mt-1 leading-relaxed">{selectedMember.bio}</p>
                </div>
              </div>
              <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-3 flex items-center gap-3">
                <button className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold pl-0.5 hover:bg-purple-500 transition-colors">
                  ▶
                </button>
                <div className="flex-1">
                  <div className="text-[10px] font-semibold text-neutral-400">Play Official Voice Reel</div>
                  <div className="h-1 bg-neutral-800 rounded-full mt-1.5 w-3/4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 bg-purple-500 w-1/3 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}