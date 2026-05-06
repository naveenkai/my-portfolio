import React from 'react';

// Add new posts to the top of this array.
const posts = [
  {
    slug: 'building-effire',
    title: 'My experience building effire.com',
    subtitle:
      'An agent that conducts resume screening, phone screening, AI video interview, and AI coding interview. Built for complete control and transparency.',
    date: '2026-05-07',
    blurb:
      'Five things I lean on now to build reliable agents on top of a primitive that is, at its heart, random.',
    body: () => (
      <>
        <h3>A bit of context</h3>
        <p>
          Around this time last year, I built a project called Interview Agent — an agent that conducts
          interviews given a resume and a job description. It went viral. 5M+ views on Instagram, 136k
          likes, ~12k followers. It was a crazy experience.
        </p>
        <figure className="post-figure">
          <img
            src={process.env.PUBLIC_URL + '/images/interview-agent-reels.jpeg'}
            alt="Two Instagram reels of Interview Agent — the coding round demo and the AI interview demo."
          />
          <figcaption>Interview Agent on Instagram — V2 (left) and V1 (right).</figcaption>
        </figure>
        <p>
          And then I started working on it further. Because the thing I had shipped was maybe 5% of what
          I actually had to build. I had to build voice infrastructure from scratch, an orchestrator,
          telephony and video streaming infra, an eval system, a robust scoring system with minimal error
          rate (+ or -5), and a context-aware agent that could actually carry a real interview.
        </p>
        <p>
          Somewhere in that grind, I got irritated.
        </p>
        <p>
          Irritated with the non-deterministic nature of LLMs. The reason I got into AI in the first
          place was because of how deterministic traditional ML felt — it instilled deterministic
          thinking in me. Now I was working with agents, and that determinism was gone.
        </p>
        <p>
          Don't get me wrong — LLMs are a genuine breakthrough. Language is essential to being human.
          It's how we communicate, reason, and get things done. So a model that works in language is a
          breakthrough because language matters to us.
        </p>
        <p>
          But by their nature, LLMs are random. Ask the same question across two chats and you'll often
          get two different answers — especially for tasks like scoring or writing remarks. The output
          depends heavily on the terminologies you use, and the probability those words showed up in the
          training data plays a huge role in the quality of what comes back. They're vulnerable to
          prompt injection. They carry biases toward whichever ideas dominate the internet.
        </p>
        <p>
          So how do you build something reliable on top of something that random?
        </p>
        <p>
          Over the last year, I've come to think about it through five things. This post is about those
          five.
        </p>

        <h3>1. Context Managers</h3>
        <p>This is the first half of every agent I build.</p>
        <p>
          LLMs, the way I see them now, are good context managers. That's their actual job in an agent
          system. They take in messy context — user input, tool outputs, prior conversation,
          instructions — and they manage it. They route. They reason about it in language. They produce
          the next move.
        </p>
        <p>That's it. That's the role.</p>
        <p>
          The reason this framing helps me is that it stops me from asking LLMs to do things they're bad
          at, like deterministic computation, exact scoring, or strict rule following. Those are not
          context-management problems.
        </p>
        <p>
          If you think of LLMs as the part of your system that automates the repeated thoughts a human
          would have while looking at incoming context — "okay, what is this user asking, what tool
          should I call, what should I say back" — they become a lot less mysterious.
        </p>

        <h3>2. Controlled Entities</h3>
        <p>This is the other half. The deterministic half.</p>
        <p>
          Tools. APIs. Functions. Gmail MCP. A scoring function. A SQL query. A retrieval call. Anything
          that takes defined input parameters and returns defined output parameters.
        </p>
        <p>
          These are your controlled entities. They're predictable. They don't hallucinate. They don't
          drift between runs.
        </p>
        <p>
          The trick to building reliable agents, I've found, is moving as much of the real work as
          possible out of the context manager (the LLM) and into controlled entities (your tools). The
          LLM decides what to do; the tool actually does it.
        </p>
        <p>
          In Interview Agent, the scoring math is a function. The LLM doesn't pick a number out of the
          air — it provides reasoning, the tool computes the score.
        </p>
        <p>
          This split — context managers + controlled entities — is, I think, the single most useful
          mental model I have for agent design.
        </p>

        <h3>3. Context Engineering</h3>
        <p>
          Now, the randomness doesn't fully go away just because you've offloaded computation to tools.
          The context manager is still bounded by two things: the context it gets, and the format it's
          given in.
        </p>
        <p>That's where context engineering comes in.</p>
        <p>Context engineering is the craft of shaping what the agent sees. It's deciding:</p>
        <ul>
          <li>Should I extract specific fields and pass them in as JSON instead of dumping the raw text?</li>
          <li>Can I compress this long history without losing the bits that matter?</li>
          <li>When should I inject new context mid-conversation?</li>
        </ul>
        <p>That last one matters more than people realize. A few examples from my own work:</p>
        <ul>
          <li>
            When a user clicks a button in the UI, I inject a short context note so the agent knows the
            click happened.
          </li>
          <li>
            When a user submits code, I run a separate API call to evaluate the code, then inject that
            evaluation summary back into the agent's context. The agent now has a real, structured
            signal to talk about — not a guess.
          </li>
        </ul>
        <p>
          This becomes critical in voice agents, where you need the conversation to feel meaningful,
          real-time, and contextually aware. The latency budget is brutal, and the agent needs the right
          context at the right moment, in the right format. Not all of it. Not raw. Engineered.
        </p>

        <h3>4. Eval</h3>
        <p>
          If I had to pick the single most important thing in building any agent, it's eval.
        </p>
        <p>Your evaluation dataset and the metrics you track are everything.</p>
        <ul>
          <li>Want to swap in a cheaper model to cut cost? You need eval to know if it actually still works.</li>
          <li>Want to try a new prompt or a new context-engineering trick? You need eval to know if it's better, worse, or just different.</li>
          <li>Want to add a new tool, change an architecture, refactor an orchestrator? Eval tells you whether the change moved the needle.</li>
        </ul>
        <p>
          Without eval, every "improvement" is vibes. With eval, you have an internal benchmark — and
          benchmarks are what let you make changes confidently instead of nervously.
        </p>
        <p>
          I'll be honest: building a good eval set is unglamorous. It's slow, manual, and feels like a
          detour from the "real" work. It is the real work. Skip it and you'll spend ten times longer
          debugging things you can't measure.
        </p>

        <h3>5. Transparency, Trust, Control</h3>
        <p>
          This is the part I care about the most. Probably because it forces me to stay first-principled
          and realistic about what I'm building.
        </p>
        <p>
          I think of an agent as an excited intern who inherited their weights from the internet. It's
          smart. It's capable. It's also, sometimes, foolish — depending on the model, the context, and
          what you're asking it to do.
        </p>
        <p>
          When you work with an intern like that, you don't blindly trust them. You ask them to show
          their work.
        </p>
        <p>So I hold my agents to the same standard:</p>
        <ul>
          <li>When the agent says something, can it cite evidence?</li>
          <li>When it scores a candidate, is it explaining why it scored that way?</li>
          <li>When it makes a decision, can a human follow the trail?</li>
        </ul>
        <p>That's transparency.</p>
        <p>
          Trust comes after that, and trust is earned narrowly. I trust a specific agent on a specific
          task within a specific threshold. Below the threshold, the work goes to a human. The scoring
          system isn't there to replace the human reviewer — it's there to know when to call them in.
        </p>
        <p>And finally, control.</p>
        <p>
          Humans should set the rules. Humans should be able to stop the system within five minutes. Not
          five days, not after a long incident review — five minutes. If you can't kill it fast, you
          don't really control it.
        </p>
        <p>
          The more autonomous your agent, the more important this gets. An agent that acts in the world
          — sends emails, books interviews, triggers workflows — is an agent that can also send the
          wrong email, book the wrong interview, trigger the wrong workflow. The kill switch isn't a
          nice-to-have. It's the price of letting the thing run at all.
        </p>

        <p>
          None of these are revolutionary on their own. But put together, they're the lens I use now
          when I look at any agent system — mine or someone else's. They're how I stay sane in a field
          where the underlying primitive is, at its heart, random.
        </p>
        <p>
          If you're building agents and any of this resonates, I'd love to hear.
        </p>
        <p>— Naveen</p>
      </>
    ),
  },
];

export default posts;
export const getPost = (slug) => posts.find((p) => p.slug === slug);
