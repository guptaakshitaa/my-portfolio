import React from 'react';

const About: React.FC = () => {
  // Define image paths - just change the filename and they'll be picked from /public/images/
  const images = {
    techMinimal: '/images/my-photo.png',
    campusArchitecture: '/images/unicampus.png',
    tradingGraph: '/images/trading-graph.png',
    neuralNetwork: '/images/tech.png',
    oldBooks: '/images/reading.png',
    modernFashion: '/images/fashion.png'
  };

  return (
    <div className="flex flex-col gap-20 max-w-4xl">
      {/* INFO Section */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold">About</h4>
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            INFO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7 flex flex-col gap-4">
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              I work at the intersection of technology, data, and decision-making. I'm an undergraduate IT student with hands-on experience in machine learning, risk analytics, and full-stack development, and a strong interest in how models behave when they meet real-world constraints.
            </p>
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              I enjoy translating theory into practical systems, whether that's building AI-driven applications, working with financial data, or evaluating risk and uncertainty. I'm especially drawn to applied AI and quantitative thinking, where technical rigor, context, and human judgment all matter. For me, good technology is thoughtful, responsible, and quietly effective.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-800 rounded-3xl overflow-hidden shadow-sm ring-1 ring-neutral-900/5 dark:ring-white/10">
              <img 
                src={images.techMinimal}
                alt="Technology and Data" 
                className="w-full h-full object-cover grayscale opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION Section */}
      <section className="flex flex-col gap-8 py-14 border-y border-neutral-100 dark:border-neutral-800">
        <div className="flex flex-col gap-2 text-center items-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white uppercase">EDUCATION</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           <div className="flex flex-col gap-4 justify-center">
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              I am pursuing my undergraduate degree in Information Technology, with academic and project experience across machine learning, data analysis, and software engineering.
            </p>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              Alongside coursework, I've gained industry exposure through internships, applied research, and certifications with organizations such as Piramal Finance, Tata, Deloitte, Columbia University, and MIT (ongoing). I've also held leadership roles in technical and innovation-focused communities.
            </p>
          </div>
          <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-3xl overflow-hidden shadow-sm ring-1 ring-neutral-900/5 dark:ring-white/10">
            <img 
              src={images.campusArchitecture}
              alt="University Architecture" 
              className="w-full h-full object-cover grayscale opacity-90"
            />
          </div>
        </div>
      </section>

      {/* THINGS I LOVE TO DO Section */}
      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white uppercase">THINGS I LOVE TO DO</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {/* Markets & Risk */}
          <div className="flex flex-col gap-4">
            <div className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-3xl overflow-hidden shadow-sm ring-1 ring-neutral-900/5 dark:ring-white/10">
              <img 
                src={images.tradingGraph}
                alt="Financial Markets" 
                className="w-full h-full object-cover grayscale opacity-90" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Markets & Risk</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                Markets, risk, and uncertainty fascinate me. I enjoy working with financial data and frameworks where small decisions compound and models must be both precise and realistic.
              </p>
            </div>
          </div>

          {/* AI Systems */}
          <div className="flex flex-col gap-4 md:mt-10">
            <div className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-3xl overflow-hidden shadow-sm ring-1 ring-neutral-900/5 dark:ring-white/10">
              <img 
                src={images.neuralNetwork}
                alt="AI Evaluation" 
                className="w-full h-full object-cover grayscale opacity-90" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">AI Evaluation</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                I like working hands-on with AI systems — from development to evaluation — with a focus on interpretability, robustness, and responsible use.
              </p>
            </div>
          </div>

          {/* Reading & Psychology */}
          <div className="flex flex-col gap-4">
            <div className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-3xl overflow-hidden shadow-sm ring-1 ring-neutral-900/5 dark:ring-white/10">
              <img 
                src={images.oldBooks}
                alt="Reading and Research" 
                className="w-full h-full object-cover grayscale opacity-90" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Reading & Psychology</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                I enjoy reading across technology, economics, and psychology. Understanding how people think helps me build systems that are more intuitive and effective.
              </p>
            </div>
          </div>

          {/* Fashion & Design */}
          <div className="flex flex-col gap-4 md:mt-10">
            <div className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-3xl overflow-hidden shadow-sm ring-1 ring-neutral-900/5 dark:ring-white/10">
              <img 
                src={images.modernFashion}
                alt="Fashion and Design" 
                className="w-full h-full object-cover grayscale opacity-90" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Fashion & Design</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                Fashion is where structure meets intuition. I enjoy exploring style as self-expression and design thinking — understanding aesthetics, proportion, and identity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;