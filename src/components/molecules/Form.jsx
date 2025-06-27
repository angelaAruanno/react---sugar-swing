import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function Form({ className }) {
  const formFields = [
    { placeholder: 'nome*', type: 'text' },
    { placeholder: 'cognome*', type: 'text' },
    { placeholder: 'email*', type: 'email' },
    { placeholder: 'Name Location*', type: 'text' },
  ];

  return (
    <section>
      <div
        className={`sec-form flex flex-col justify-center rounded-2xl w-md max-lg:w-full min-h-11/12 font-sans-serif ${className || ''}`}
      >
        <h4 className='text-2xl text-brown-300 font-semibold text-center my-4'>
          <span className='hidden max-lg:inline'>Prenota un tavolo</span>
          <span className='max-lg:hidden'>Compila il form</span>
        </h4>

        <form className='flex flex-col items-center justify-center gap-4'>
          {formFields.map(({ placeholder, type }) => (
            <Input key={placeholder} placeholder={placeholder} type={type} />
          ))}

          <label className='flex items-start gap-2 text-brown-200 max-lg:text-sm w-4/5'>
            <input type='checkbox' className='mt-1' />
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </label>

          <div className='flex justify-end w-4/5 my-2'>
            <Button>Prenota un tavolo</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
