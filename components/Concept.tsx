import React from 'react';

export const Concept: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/meeting_business/800/600" 
                alt="Mentorship session" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decor element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-blue/10 rounded-xl -z-0"></div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-brand-dark leading-tight mb-8">
              g.f.t.s. Membersが、<br />
              あなたの学びを<br />
              <span className="text-brand-blue">「本物」</span>に変えます。
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-loose">
              <p>
                私たちが提供するのは、単なる教材ではありません。
              </p>
              <p>
                専門家による導きと、共に学ぶ仲間の存在によって、あなたの学習を<strong className="text-brand-blue border-b-2 border-brand-blue/30">「継続できる仕組み」</strong>と<strong className="text-brand-blue border-b-2 border-brand-blue/30">「確かな成長実感」</strong>へと導く、全く新しい会員制サービスです。
              </p>
              <p className="text-sm text-gray-500 pt-4">
                独学の限界を超え、プロフェッショナルな環境で、あなたの潜在能力を最大限に引き出します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};