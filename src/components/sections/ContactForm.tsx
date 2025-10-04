import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';


// 型定義
type ContactFormData = {
  user_name: string;
  user_furigana: string;
  user_email: string;
  user_email_confirm: string;
  user_phone: string;
  message: string;
  agree: boolean;
};

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    user_name: '',
    user_furigana: '',
    user_email: '',
    user_email_confirm: '',
    user_phone: '',
    message: '',
    agree: false,
  });

  
  // 3ステップ（入力 | 確認 | 送信）
  const [step, setStep] = useState<'form' | 'confirm' | 'done'>('form');

  useEffect(() => {
  if (step === 'done') {
    
    // 効果音再生
    const successSound = '/success.mp3';
    const audio = new Audio(successSound);
    audio.play().catch((e) => {
      console.error("効果音の再生に失敗しました:", e);
    });
  }
}, [step]);

  // フォームの状態を管理
  // フォームデータ更新処理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value, type } = e.target;

  const newValue =
    type === 'checkbox'
      ? (e.target as HTMLInputElement).checked // 安全にキャストしてcheckedを参照
      : value;
  setFormData(prev => ({
    ...prev,
    [name]: newValue,
  }));
};

  // メール送信処理（emailjs）
  const sendMail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        'service_ccpf4gr',
        'template_bsydw6v',
        form.current,
        'kR-sKn9Ease_v8aKp'
      )
      .then(() => setStep('done'))
      .catch((error) => alert('送信に失敗しました: ' + error.text));
  };

  // スクロール用関数
  const scrollUp = () => {
    window.scrollTo({ top: 2300, behavior: 'smooth' }); // 上に150px移動
  };

  // 一番上まで戻す関数
  const scrollToPageTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  };


  // ✅ 送信完了画面
  if (step === 'done') {
    return (
      <section id="contact">
        <div className="mx-auto text-center text-heading-2">
          {/* ✅ チェックマークにアニメーション追加 */}
          <motion.div
          key={step}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-30 h-30 rounded-full flex items-center justify-center mx-auto mb-12.5 mt-20"
            style={{ backgroundColor: "#9575CD" }}
          >
            <FontAwesomeIcon icon={faCheck} className="text-white text-6xl " />
          </motion.div>
          <h1 className="text-6xl font-bold w-full mb-12.5 text-center">送信完了</h1>
          <h2 className="text-4xl font-bold">お問い合わせありがとうございます。</h2>
          <p className="text-lg/8 my-12.5">
            ご入力いただいた内容を確認のうえ、5日以内にご連絡いたします（土日祝を除く）。<br />
            今しばらくお待ちくださいますようお願い申し上げます。<br /><br />
            ※確認メールを自動送信しております。<br />
            届いていない場合は迷惑メールフォルダをご確認ください。<br />
          </p>
          <button
            onClick={() => {
              scrollToPageTop();
              setStep('form');
            }}
            className="bg-accent text-white px-23 py-5 rounded-full hover:bg-[#8566bb] "
          >
            トップページへ
          </button>
        </div>
      </section>
    );
  }

  // ✅ 確認画面
  if (step === 'confirm') {
    return (
      <section id="contact">
        <div className="w-full mx-auto">
          <h2 className="text-6xl font-bold mt-20 mb-5 text-center text-heading-2">Contact From（確認）</h2>
          <p className="w-full pb-25 text-center text-heading-2">ご記入いただいた内容をご確認ください。</p>

          <h3 className='pl-80 pb-7.5 text-4xl font-bold text-heading-2'>
            基本情報
          </h3>
          <div className="w-200 mx-auto text-lg text-heading-2">
            {[
              { label: "お名前", name: "user_name", required: true },
              { label: "ふりがな", name: "user_furigana", required: true },
              { label: "メールアドレス", name: "user_email", required: true },
              { label: "メールアドレス（確認）", name: "user_email_confirm", required: true },
              { label: "電話番号", name: "user_phone", required: false }
            ].map(({ label, name, required }) => (
              <div key={name} className="mb-12.5">
                <div className="mb-5">
                  <strong>{label}</strong>
                  <span className={`ml-2 ${required ? 'bg-[#D15F5C]' : 'bg-[#C4C4C4]'} text-white text-xs px-2.5 py-[5px] rounded-full ml-4 `}>
                    {required ? '必須' : '任意'}
                  </span>
                </div>
                {(formData as any)[name]}
              </div>
            ))}
          </div>

          <h3 className='pl-80 mb-12.5 text-4xl font-bold text-heading-2'>お問い合わせ内容</h3>
          <div className="mb-12.5 w-200 mx-auto text-lg text-heading-2">
            <div className="mb-5">
              <strong className='font-medium'>お問い合わせ内容</strong>
              <span className=" bg-[#D15F5C] text-white text-xs px-2.5 py-[5px] rounded-full ml-4">必須</span>
            </div>
            {formData.message}
          </div>

          <h3 className='pl-80 mb-12.5 text-4xl font-bold text-heading-2'>同意事項</h3>
          <div className="mb-12.5 w-200 mx-auto text-lg">
            <div className="mb-5 text-heading-2">
              <strong>プライバシーポリシー同意</strong>
              <span className=" bg-[#D15F5C] text-white text-xs px-2.5 py-[5px] rounded-full ml-4">必須</span>
            </div>
            <span className="text-heading-2">
              {formData.agree ? '同意する' : '未同意'}
            </span>
          </div>

          <form ref={form} onSubmit={sendMail}>
            {Object.entries(formData).map(([key, val]) => {
              let value = val;
              if (key === 'agree') {
                value = val ? '同意する' : '未同意';
              }
              return <input key={key} type="hidden" name={key} value={String(value)} />;
            })}

            <div className="flex gap-4 mt-8 w-200 mx-auto">
              <button
              type="button"
              onClick={() => {
                scrollUp();
                setStep('form');
              }}
              className="w-95 py-5 rounded-full text-white bg-[#BBBBBB] hover:bg-[#AAAAAA] "
            >
                修正する
              </button>
              <button type="submit" className="bg-[#9575CD] text-white w-95 py-5 rounded-full hover:bg-[#8566bb]"
              onClick={scrollUp} 
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }

  // ✅ 入力フォーム画面
  return (
    <section id="contact">
      <form className="w-full mx-auto" 
      onSubmit={(e) => { e.preventDefault(); 

        if (formData.user_email !== formData.user_email_confirm) {
        alert("メールアドレスが一致しません");
        return;
      }

      scrollUp();
      setStep('confirm'); 
      }}
      >
        <h2 className="text-6xl font-bold mt-25 mb-7.5 text-center text-heading-2">Contact From</h2>
        <p className="w-full pb-25 text-center text-heading-2">下記に必要事項をご記入の上、お問い合わせください。</p>

        <div className="w-200 mx-auto">
          {[
            { label: 'お名前', name: 'user_name', placeholder: '例）佐藤太郎', required: true },
            { label: 'ふりがな', name: 'user_furigana', placeholder: '例）さとうたろう', required: true },
            { label: 'メールアドレス', name: 'user_email', placeholder: 'sample@example.com', required: true },
            { label: 'メールアドレス（確認用）', name: 'user_email_confirm', placeholder: 'sample@example.com', required: true },
            { label: '電話番号', name: 'user_phone', placeholder: '例）09012345678', required: false }
          ].map(({ label, name, placeholder, required }) => (
            <div className="mb-12.5" key={name}>
              <label className="block text-lg font-medium mb-[20px] text-heading-2">
                {label}
                <span className={`ml-2 ${required ? 'bg-[#D15F5C]' : 'bg-[#C4C4C4]'} text-white text-xs px-2.5 py-[5px] rounded-full ml-4 text-heading-2`}>
                  {required ? '必須' : '任意'}
                </span>
              </label>
              <input
                type={name.includes('email') ? 'email' : 'text'}
                name={name}
                placeholder={placeholder}
                value={formData[name as keyof ContactFormData] as string}
                onChange={handleChange}
                required={required}
                className="w-full px-5 py-5 border border-line rounded-full text-heading-2"
              />
            </div>
          ))}

          <div className="mb-12.5 text-heading-2">
            <label className="block text-lg font-medium mb-5">
              お問い合わせ内容
              <span className=" bg-[#D15F5C] text-white text-xs px-2.5 py-[5px] rounded-full ml-4">必須</span>（1000文字以内でご記入ください）
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={1000}
              className="w-full h-50 p-5 border border-line rounded-3xl"
            />
          </div>

          <div className="mb-12.5 text-heading-2">
            <p className="text-lg font-medium mb-5">
              プライバシーポリシーに同意する
              <span className=" bg-[#D15F5C] text-white text-xs px-2.5 py-[5px] rounded-full ml-4">必須</span>
            </p>
            <label className="inline-flex items-center text-lg font-medium text-heading-2">
              <input
                type="checkbox"
                name="agree"
                value="同意する"
                checked={formData.agree}
                onChange={handleChange}
                className="mr-2"
                required
              />
              同意する
            </label>
          </div>

          <button
            type="submit"
            className="bg-accent text-white py-5 rounded-full hover:bg-[#8566bb] w-full text-heading-2"
          >
            確認画面へ
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
