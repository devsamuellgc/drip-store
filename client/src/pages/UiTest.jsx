import Button from '../components/Button';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Input from '../components/Input';

export default function UiTest() {
  return (
    <>
      <Header />
      <main className="min-w-full bg-gray-300 px-6 py-3">
        <div className="w-full">
          <h2 className="font-bold text-center text-3xl mb-5">Cards</h2>
          <Cards />
        </div>
        <div className="w-full flex flex-col gap-3">
          <h2 className="font-bold text-center text-3xl mb-5">Buttons</h2>
          <Button title="Título teste" color="red" />
          <Button title="Botão diferente" color="white" />
          <Button title="Diferente também" color="blue" />
          <Button color="blue" type="rounded" />
        </div>
        <div className="w-full flex flex-col gap-4">
          <h2 className="font-bold text-center text-3xl mb-5">Inputs</h2>
          <Input type="text" placeholder="Input texto um" />
          <Input type="text" placeholder="Input texto dois" style="!bg-red-600 text-black" />
          <Input type="number" placeholder="Input número" />
          <Input type="date" />
          <Input type="file" className="min-w-fit" />
        </div>
        <div>
          <input className='w-10 h-10' type="radio" name="tam" />
        </div>
      </main>
    </>
  );
}
