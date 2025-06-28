import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import H4 from "../atoms/H4";

export default function Form({ className }) {
  const formFields = [
    { placeholder: 'Nome*', type: 'text' },
    { placeholder: 'Cognome*', type: 'text' },
    { placeholder: 'Email*', type: 'email' },
    { placeholder: 'Name Location*', type: 'text' },
  ];

  return (
    <section>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center"
        className={`sec-form flex flex-col justify-center rounded-2xl w-md max-lg:w-full min-h-11/12 font-sans-serif ${className || ""}`}
      >
        <H4 />

        <form className="flex flex-col items-center justify-center gap-4">
          {formFields.map(({ placeholder, type }) => (
            <Input key={placeholder} placeholder={placeholder} type={type} />
          ))}

          <Label />

          <div className="flex justify-end w-4/5 my-2">
            <Button>Prenota un tavolo</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
