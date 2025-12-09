import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../constants';

export const Company: React.FC = () => {
  const companyDetails = [
    { label: '会社名', value: COMPANY_INFO.name },
    { label: '設立', value: COMPANY_INFO.established },
    { label: '代表者', value: COMPANY_INFO.representative },
    { label: '所在地', value: COMPANY_INFO.address },
    { label: '電話番号', value: COMPANY_INFO.tel },
    { label: 'メールアドレス', value: COMPANY_INFO.email },
    { label: '事業内容', value: COMPANY_INFO.business },
  ];

  return (
    <section className="py-24 bg-brand-gray">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">運営会社</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <dl>
            {companyDetails.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row p-5 ${index !== companyDetails.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <dt className="sm:w-48 font-bold text-brand-dark flex-shrink-0">
                  {item.label}
                </dt>
                <dd className="mt-1 sm:mt-0 text-gray-700 sm:col-span-2">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
};
