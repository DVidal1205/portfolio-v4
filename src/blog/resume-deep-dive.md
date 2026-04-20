---
title: Your Resume may be your Bottleneck. Here's How to Fix it.
description: Most people who would pass an interview never get one. The resume is why. Here's how to actually play the game.
tags:
    - career
    - resume
    - advice
date: 2026-04-18
published: true
---

I have a pretty good feeling that a lot of people reading this would pass a technical interview. The problem is getting the interview in the first place. You can't show off if you never get the shot. And the resume is what's standing between you and that shot almost every time.

---

## The market right now

The market is rough. I'm not saying this to scare anyone - I'm saying it because you need to understand the gravity of the situation to understand why every detail on your resume matters.

Handshake reported that tech had roughly 273 applications per posting last recruiting season. That sounds manageable until you realize that's an average. Google, Microsoft, Nvidia, Amazon - they get tens of thousands per position. The Nvidia Ignite sophomore program had 15,000 applicants. They took 80.

On top of that, the layoffs of the past few years put experienced engineers back into the same market as new grads. We're mostly talking junior developers with two to three years in industry competing alongside you for the same entry-level roles.

This is a game. There's an end goal, a position you're at now, and ways to pick up buffs along the way. If there's one thing in your recruiting stack to be a perfectionist about, it's your resume. It's the only variable that's entirely in your control. You can open it and work on it any time, without waiting on a professor, a recruiter, or anyone else.

---

## The three audiences your resume has to clear

Most people only optimize for one. That's usually the problem.

A good CS resume has to work for three different audiences, in order:

1. **The ATS** (applicant tracking system) - the algorithm that screens your resume before a human ever touches it
2. **Recruiters** - the person who gives it six to eight seconds and decides whether to keep reading
3. **Engineers and hiring managers** - the people who actually evaluate whether you can do the job

Each one needs something different from you.

### Optimizing for the ATS

The ATS's whole job is parsing. It's reading your PDF and trying to extract structured data - name, school, job titles, dates, skills. If your resume makes that hard, it doesn't matter what's on it. You're done before anyone sees a word.

Keep it boring for the ATS:

- One column layout
- Standard section headers (Education, Experience, Projects, Skills)
- Normal bullet points
- No pictures, no graphics, no text boxes, no icons
- No tables or multi-column formatting

The more "designed" your resume is, the harder it is to parse. Canva resumes are a disaster for this. Google Docs introduces a lot of bloat under the hood. The cleaner your PDF, the better the ATS can read it.

**The tool you use matters.** LaTeX via Overleaf produces the cleanest, most parseable PDFs. The most popular template for CS students is [Jake's Resume](http://overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs), and it's free. If you don't want to write the markup yourself, paste your existing resume into an LLM alongside Jake's template and ask it to convert it. One shot, done.

I switched to LaTeX partway through my freshman recruiting season with the exact same content I'd had before. I started getting responses. Anecdote, not proof - but it's a low-risk change with real potential upside.

### Optimizing for recruiters

Once the ATS hands your resume to a person, you get six to eight seconds. Studies confirm this, and anyone who's done resume review at any kind of scale will tell you it's real. In those seconds, a recruiter decides whether to keep reading or move on.

Make it skimmable:

- Clear, consistent formatting throughout
- Strong anchor points (company name, role, dates) that are instantly readable
- Bolded metrics so key numbers jump out during a skim
- Bullets that are easy to scan, not walls of text

If a recruiter has to hunt for information, they won't. They'll just move on.

### Optimizing for engineers and hiring managers

This is where most people completely drop the ball. Getting through the ATS and the recruiter screen gets you to the technical review - and that's where the content actually matters.

Engineers don't want a list of technologies. They want to know:

- What you actually built
- What was hard about it
- What changed because of your work
- What your individual contribution was

"Used React to build a web app" means nothing. "Reduced page load time by 40% by replacing unnecessary re-renders with memoized components" tells a story. A resume is not supposed to sound impressive. It should prove something.

Someone with a less flashy background can have a much better resume than someone who's ex-FAANG. It's all about working with what you've got and being specific about it.

---

## What to avoid

Beyond the ATS formatting issues above, a few other things to stay away from:

- **Two-column layouts.** The ATS reads in a certain order. Splitting your whole resume down the middle breaks that. Having a job title on the left and a date on the right is fine. Parallel columns for entire sections is not.
- **Summary and objective statements.** They take up space that could go to something that actually shows ability. A summary mostly signals you don't have enough to fill the page. Cut it when you can.
- **Long coursework lists.** A project that shows you know the material is worth ten times more than a line saying you took a class on it.
- **Two pages.** Not at this stage. Decrease your font slightly and make it fit on one page. The person reviewing your resume at a career fair is not flipping a stapled page. You lose the rest of your six seconds the moment that happens.
- **White space.** Think of your resume like a canvas - you want to feel like you don't have enough room. Bump your font up, make your name bigger at the top. Pack it.

---

## What to actually do

### Write bullets that prove something

Use the XYZ method as a frame: accomplished X, as measured by Y, by doing Z. You don't have to follow it exactly, but the spirit matters. Every bullet should tell someone what you did, how impactful it was, and how you did it.

- Weak: "Built a machine learning model"
- Better: "Built a CV model that achieved 96% accuracy on image classification"
- Better still: "Reduced image classification error rate by 23% by switching from a CNN to a transformer architecture"

Numbers matter. You can estimate them - you don't have to have literally run the experiment. But you should be able to describe how you'd derive the number if someone asks. Don't say you improved network latency by 500%. Be reasonable.

Lead every bullet with an action verb. Built, designed, led, optimized, deployed, reduced. Don't reuse the same verb repeatedly either. It makes your vocabulary look limited.

### Bold strategically

Bolding is a better version of highlighting that still looks professional. If a recruiter is skimming for React and you bold React in the project where you used it, they'll find it instantly and read what you actually did with it. That's stronger than React sitting in a skills list at the bottom of your resume.

Show them you know it. Don't just list it.

### Layout order

1. **Education at the top, always.** Grad year is one of the first things a recruiter looks for, and it determines whether your resume is even worth reading for a given position. Include your expected graduation term and year. Leave out your enrollment start date - the ATS might read a 2022 start and flag you as someone who already graduated.
2. **Projects or experience in the middle**, whichever is stronger. No technical internship yet? Projects go first - they're what best demonstrate your ability. Once you have solid work experience, that moves up.
3. **Skills at the bottom**, Instagram-hashtag style. They're there for the ATS. The projects above them are what actually prove you know the tech.

### A few more ATS tips

- Unless it's a 4.0, leave your GPA off. It's one less thing for the ATS to dock you for, and hiring teams will only really check it after interviews - at which point they're already sold on you.
- Include quantitative metrics wherever possible. Estimates are fine, but be ready to explain how you derived them.
- Keep tense consistent. Current roles in present tense, past roles in past tense.

---

## How to fill the page

If your resume is looking sparse, the best thing you can do is build content for it. A few options:

- **Projects.** Unlike internships or research positions, projects don't require anyone to give you a shot. You can start one this weekend. Build them with teammates when you can - it lets you show both technical ability and the ability to work with other people.
- **Non-technical experience.** Sales, retail, food service - frame these around teamwork, reliability, and communication. A lot of programs care more about whether you're someone they can work with than whether you already know the stack.
- **Freelancing.** Email local businesses that don't have websites and offer to build one. You learn the full software cycle, from managing client expectations to shipping something real, without waiting on anyone.
- **Research.** The bar at most universities is lower than people think. Email a professor whose work interests you. Some labs will bring you in with minimal requirements.
- **Apply everywhere.** This is a numbers game. I applied to around 230 places one season. Some people go into the 400s. Apply broadly, land your first role somewhere, build from there.

---

## Test your resume before you send it

Three quick checks you can run on your current PDF right now:

1. **Ctrl+A test.** Press Ctrl+A on your resume PDF. Everything should get selected. If any text isn't highlighted, an ATS can't read it either.
2. **Paste test.** Copy that selected text and paste it into a blank document. It should follow roughly the same order as your resume. If text from two columns is getting spliced together, that's what the algorithm is seeing.
3. **Workday autofill test.** Find any job posted on Workday and use the autofill with resume option. If your job title comes back as a technology name, or a project shows up under work experience, you have a parsing problem.

---

## The short version

Your resume needs to clear three filters: the ATS, the recruiter, and the engineer. Most people only optimize for one.

Get the formatting right for the ATS first. Make it skimmable for a recruiter in six seconds. Then make sure the content actually proves something to whoever reads it deeply.

The resume is step one. Once you land the interview, you still have to ace it - but that's a different post.
