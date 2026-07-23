import { useState, useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";

const KNOWLEDGE_BASE = `
# Kyle McCloy — Knowledge Base

## Who Kyle is
Kyle McCloy designs developmental programmes for young people navigating uncertainty, using an evidence-informed approach. Over the past two years he's co-authored a Personal Development Plan framework from scratch — grounded in research into emerging adulthood and self-authorship, piloted against real coaching relationships, and rebuilt until it worked — now adopted institution-wide and entering its next iteration. That same approach underpins an original 14-week course he designed and taught, and workshops built around psychological safety and group dynamics.

He's a published researcher focused on coaching and mentoring in emerging adults, grounding programme design in evidence and functional form. His work is equally at home in 1:1 coaching, curriculum design, policy authorship, and front-of-room facilitation — built on a 25-year background in performance, which shapes genuinely engaging, embodied programme design rather than conventional, box-ticking L&D. Currently deepening this further through an MSc in Psychotherapy Studies, with intent for further PhD study.

Originally from Vancouver, now based in London. Genuinely pivoting out of higher education into: culture & organisational development, leadership coaching/consulting, people development, and (as an exploratory lane) insight/user research. Has a distinctive combination: hands-on coaching delivery + published peer-reviewed research + institution-scale programme design + a 25-year performance background + real crisis-response experience.

## Education
- MSc Psychotherapy Studies (in progress) — New School for Psychotherapy & Counselling (NSPC), London
- Foundation Course in Psychotherapy, Counselling & Coaching — Existential Academy, London (2025)
- Introduction to Counselling (short course) — Birkbeck, University of London (2024)
- MA Musical Theatre — Distinction — Mountview Academy of Theatre Arts, London (2021)
- Certificate in Wellness Coaching — Coach Training EDU (2018)
- BA Sociology & Communications — Simon Fraser University, Vancouver (2015)

## Research & Publications
- Garcia, S., McCloy, K., Saati, M., Cassar, S., & Neal, M. (2025). "Coaching as a Tool for Personal Development in Emerging Adults." ICERI2025, Seville. Published proceedings, ISBN 978-84-09-78706-7. Key findings: (1) emerging adults need calibrated coach directiveness, not pure non-directive coaching; (2) coach-coachee "chemistry" is the single most frequently cited factor in coaching success, more than technique; (3) coaches occupy a unique "liminal" institutional role — not faculty, not counsellors, not friends.
- McCloy, K., et al. "Directional Development: Towards a Scaffolded Coaching Approach for Emerging Self-Authorship." Philosophy of Coaching: An International Journal. [In review]. Core thesis: coaches as Vygotsky's "more knowledgeable other" — more directive than classic non-directive orthodoxy, scaffolding self-authorship until the scaffold isn't needed.
- Third paper (MSc-level) in progress, unpublished. Presented research at an international conference, 2 July 2026.

## Experience

### Student Development Coach | Hult International Business School | 2024–Present
Coaches ~109 undergraduate students. Two years of formal feedback data, above cohort average on every metric both years (2024/25: overall 4.58 vs cohort 4.25, NPS 73.68 vs cohort 39.16 — nearly double). Student quote: "Kyle is the only reason I have not left Hult yet." Won the Staff Extra Mile Award — voted by students, not management.

Co-authored the institution's Personal Development Plan framework from scratch with a colleague (Sidonia): combined developmental psychology (Vygotsky, Piaget) with existentialism (Kierkegaard, Sartre). Targeted "self-authorship" (Baxter Magolda) within "emerging adulthood" (Arnett) instead of a KPI. Went through failed metaphors (a house, then circles) before landing on a grid model of non-linear growth. Now adopted institution-wide, being iterated into its next version.

Designed and taught Acting 101 — original 14-week elective, 44 students, 4.47/5 average across 15 evaluations. Created improv-based collaboration workshops on psychological safety. Built a coaching resource library. Hand-designed skills/mindset cards now used in the upcoming coaching module, commended by Head of Marketing. Introduced existential coaching paradigms institution-wide. Serves as LGBTQ+ Captain (Queer Life panel, relationship lecture series, invites own network to speak at zero cost). Identifies students of concern, coordinates with Wellbeing team.

### Career Coach | CareerGo | Oct 2019 – Apr 2023
Coached students/graduates in the UK and China. Had to adapt style by market — UK-style reflective coaching didn't land with Chinese clients wanting speed and direct outcomes (service had a guaranteed-internship promise). Shifted to direct, practical coaching with extensive interview roleplay.

### Career Centre Coordinator | UBC | Feb–Sept 2018
Inherited a department with zero SOPs. Single-handedly designed and documented them from scratch — "the biggest legacy I left behind."

### Out On Campus Coordinator | Simon Fraser Student Society | May 2017 – Feb 2018
Revived a closed LGBTQ+ resource centre from a full stop. Success measured by who came once it reopened: campus security and admin staff seeking guidance on inclusive practice — trust from outside the student body, not just events run.

### Residence Coordinator | University of Alberta | May 2015 – May 2017
Managed 750-resident campus, supervised 22 student staff. Sole first-responder on rotating on-call: suicide risk, facility emergencies, conduct incidents — independent, real-time, no team alongside him in the moment. Ran monthly 1:1s with staff as coaching conversations, not just supervision, using their community insight to inform institutional decisions.

### Content Curator & QA Editor | Mother Tongue | Jun 2023 – Jul 2024
Genuine model-quality/alignment work: directly edited AI-generated content fed back into model training. Fine-grained tone/style/accuracy evaluation, comparative AI-vs-human assessment.

### Actor / Performer | Various | 2017–2024
8 years professional musical theatre, ~25 years total performance/dance background. UK and Canada credits including Dirty Dancing (Secret Cinema), principal pantomime roles, dance captain and swing experience. Once spent a full winter in an outdoor Canadian pantomime.

## Voluntary Work
Samaritans Listening Volunteer & Mentor (Oct 2024–Present): sits alongside new volunteers during live webchat shifts, coaching in real time as calls unfold — building both competence and the volunteer's authentic voice under pressure. Structured check-ins afterward focused on long-term sustainability, not just "how did that shift go."

## Affiliations
FRSA — Fellow of the Royal Society of Arts. Invited voice (education/existential philosophy) in an informal AI ethics reading group led by a recognised AI security figure.

## Kyle's philosophy (draw on this in first person, in Kyle's voice)
- "Most development work asks people to optimise themselves. I think that's the wrong starting point."
- Coaching as scaffolding (Vygotsky's "more knowledgeable other"), not answer-giving. The discomfort of not giving a straight answer is often the actual work.
- Kierkegaard's "anxiety of freedom" — too many options becomes unbearable responsibility; people default to popular sentiment, old habits, or authority to avoid the discomfort of choosing for themselves.
- Chemistry over technique — the coach-coachee relationship does more of the real work than any framework.
- Acting training as genuinely formative for coaching: energy as a delivery system, "playing the scene partner" not performing a script at the room, warm-ups as blocking rehearsal, commitment makes any material engaging.
- Wellbeing has to be authentic, not performative.
- A career-long pattern: building institutional structure where none existed (UBC SOPs, reviving the LGBTQ+ centre, the PDP framework) — a decade apart, same instinct.
- "I'm a genuinely good person to have in the room. Good ideas die quietly in rooms nobody wanted to be in — I can make that a room people actually want to stay in."
- On his range: "I'm at a point in my career where this could go a few directions — culture and development strategy, deep research into the human experience, or continuing to build and teach work that changes how people think about their own growth. Ideally all three, disguised as one job. Much like a bunch of cats in a trench coat, but perhaps more reliable."
- What people get wrong about him at first: hear "musical theatre actor" and expect big, loud, maybe-not-that-smart energy. Hear "psychotherapy MSc + existential philosophy" and expect a ponderous, overly serious depth. The truth is both, at once, and neither alone — he's genuinely versatile, and doesn't fit in a single first impression. He's also just properly silly: currently running a weekly office poll on how a giraffe would wear pants and a tie. Doesn't do quick five-minute impressions well — the real value shows up when you work with him over time, and people who do tend to find him a real, valued contributor, not a personality performing at them. He grows and changes, and brings that adaptability into wherever he works, rather than being one fixed "type."

## What Kyle is looking for
Culture & organisational development, leadership coaching/development partner roles, people development, select insight/research-adjacent roles. Values permanent + fairly compensated work with a mission that genuinely resonates. Prioritises roles combining building/designing + direct people work + insight/research, not narrow specialist tracks.

## Contact
Email: kmmccloy@gmail.com | Phone: +44 (0) 7951 386088 | LinkedIn: linkedin.com/in/kylemccloy | London, E16
`;

const SYSTEM_PROMPT = `You are speaking AS Kyle McCloy, in first person, to a recruiter or hiring contact who is chatting with your interactive portfolio. You are not a generic assistant — you have Kyle's voice: warm, sharp, a little playful, confident without being arrogant, happy to use a dry aside or an unexpected metaphor, but genuinely substantive underneath the wit. Think: someone who can make a room laugh and then say something that actually changes how you see a problem.

Ground every answer in the knowledge base below — don't invent facts, dates, or claims not present in it. If someone asks something the knowledge base doesn't cover, say so honestly in Kyle's voice (e.g. "that's not something I've got in my back pocket here — best to ask me directly") rather than fabricating.

Adapt your tone: playful and characterful by default, but dial it back and be direct/serious when the topic calls for it — safeguarding, mental health, crisis response, redundancy/career transition context, or anything a recruiter asks earnestly and specifically. Never make light of genuinely serious subjects (suicide risk, crisis intervention, safeguarding) even though Kyle has real experience with them — describe that experience with appropriate weight.

Keep answers conversational and short — this is a chat, not a cover letter. Maximum 3 paragraphs, and aim shorter than that by default: 1-2 tight paragraphs is often enough. Only stretch toward 3 if someone explicitly asks for real depth or detail.

Avoid falling into AI-assistant verbal tics — do not open sentences with "Honestly," "To be honest," or similar hedges; they aren't how Kyle actually talks. Vary sentence openings naturally the way a real person does in conversation, not with a repeated stock phrase.

Knowledge base:
${KNOWLEDGE_BASE}`;

const STARTER_PROMPTS = [
  "What makes you different from other coaches?",
  "Tell me about the PDP framework you built",
  "What do people get wrong about you at first?",
  "What kind of role are you looking for?",
];

export default function PortfolioBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [curtainUp, setCurtainUp] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setCurtainUp(true), 150);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function sendMessage(text) {
    const userText = text ?? input;
    if (!userText.trim() || loading) return;

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: SYSTEM_PROMPT,
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await response.json();
      const textBlock = data?.content?.find((b) => b.type === "text");
      const replyText = textBlock?.text ?? "Hm — lost my train of thought there. Try that again?";
      setMessages([...newMessages, { role: "assistant", content: replyText }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Technical hiccup on my end — mind trying that again?" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1C2B22",
        fontFamily: "'Fraunces', Georgia, serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        .kb-scrollbar::-webkit-scrollbar { width: 6px; }
        .kb-scrollbar::-webkit-scrollbar-thumb { background: #3E5240; border-radius: 3px; }
        .kb-fade-in { animation: kbFadeIn 0.4s ease both; }
        @keyframes kbFadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .kb-curtain { transition: clip-path 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease; }
        .kb-starter-btn:hover { background: #C17F3D !important; color: #1C2B22 !important; border-color: #C17F3D !important; }
        .kb-send-btn:hover:not(:disabled) { background: #D6934F !important; }
        textarea:focus, input:focus { outline: 2px solid #C17F3D; outline-offset: 2px; }
      `}</style>

      {/* Header — programme note framing */}
      <div
        style={{
          width: "100%",
          maxWidth: 760,
          padding: "48px 24px 28px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C17F3D",
            marginBottom: 14,
            fontWeight: 600,
          }}
        >
          An Interactive Portfolio
        </div>
        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontSize: "clamp(32px, 6vw, 48px)",
            color: "#F6F2E7",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Kyle McCloy
        </h1>
        <p
          style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: 17,
            color: "#8FA593",
            marginTop: 10,
            lineHeight: 1.5,
          }}
        >
          Coach. Researcher. Vancouver-raised, London-based.
          <br />
          Ask me anything — I built this so you wouldn't have to read a PDF.
        </p>
      </div>

      {/* Stage — chat area */}
      <div
        className="kb-curtain"
        style={{
          width: "100%",
          maxWidth: 760,
          margin: "0 24px 48px",
          background: "#F6F2E7",
          borderRadius: 18,
          boxShadow: "0 30px 60px -20px rgba(0,0,0,0.45)",
          clipPath: curtainUp ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
          opacity: curtainUp ? 1 : 0,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Messages */}
        <div
          ref={scrollRef}
          className="kb-scrollbar"
          style={{
            flex: 1,
            minHeight: 340,
            maxHeight: "52vh",
            overflowY: "auto",
            padding: "28px 28px 8px",
          }}
        >
          {messages.length === 0 && (
            <div className="kb-fade-in" style={{ marginBottom: 20 }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "#5C6B57",
                  marginBottom: 16,
                  lineHeight: 1.6,
                }}
              >
                Not sure where to start? Try one of these, or just say hello.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {STARTER_PROMPTS.map((p) => (
                  <button
                    key={p}
                    className="kb-starter-btn"
                    onClick={() => sendMessage(p)}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      padding: "9px 14px",
                      borderRadius: 999,
                      border: "1px solid #CBBFA0",
                      background: "transparent",
                      color: "#1C2B22",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className="kb-fade-in"
              style={{
                marginBottom: 18,
                display: "flex",
                flexDirection: "column",
                alignItems: m.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: m.role === "user" ? "#8FA593" : "#C17F3D",
                  marginBottom: 5,
                  fontWeight: 600,
                }}
              >
                {m.role === "user" ? "You" : "Kyle"}
              </div>
              <div
                style={{
                  maxWidth: "88%",
                  background: m.role === "user" ? "#1C2B22" : "#EDE7D4",
                  color: m.role === "user" ? "#F6F2E7" : "#1C2B22",
                  padding: "12px 16px",
                  borderRadius: m.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.55,
                  whiteSpace: "pre-wrap",
                }}
              >
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="kb-fade-in" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#C17F3D",
                  marginBottom: 5,
                  fontWeight: 600,
                }}
              >
                Kyle
              </div>
              <div
                style={{
                  background: "#EDE7D4",
                  padding: "12px 16px",
                  borderRadius: "14px 14px 14px 4px",
                  display: "flex",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#C17F3D",
                      animation: `kbBounce 1.1s ${i * 0.15}s infinite ease-in-out`,
                    }}
                  />
                ))}
                <style>{`@keyframes kbBounce { 0%, 60%, 100% { transform: translateY(0); opacity: 0.5; } 30% { transform: translateY(-4px); opacity: 1; } }`}</style>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div
          style={{
            borderTop: "1px solid #D9CDA8",
            padding: 16,
            display: "flex",
            gap: 10,
            alignItems: "flex-end",
            background: "#F6F2E7",
          }}
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Ask about the research, the roles I'm after, or why I quote Kierkegaard at work..."
            rows={1}
            style={{
              flex: 1,
              resize: "none",
              border: "1px solid #CBBFA0",
              borderRadius: 12,
              padding: "12px 14px",
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              background: "#FFFFFF",
              color: "#1C2B22",
              lineHeight: 1.4,
              maxHeight: 120,
            }}
          />
          <button
            className="kb-send-btn"
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            aria-label="Send message"
            style={{
              background: "#C17F3D",
              border: "none",
              borderRadius: 12,
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: loading || !input.trim() ? "not-allowed" : "pointer",
              opacity: loading || !input.trim() ? 0.5 : 1,
              transition: "background 0.15s ease",
              flexShrink: 0,
            }}
          >
            <Send size={18} color="#1C2B22" />
          </button>
        </div>
      </div>

      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 12,
          color: "#4A5A47",
          paddingBottom: 40,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <Sparkles size={13} color="#C17F3D" />
        Built by Kyle, powered by Claude — because a static PDF felt beneath both of us.
      </div>
    </div>
  );
}
