import Content from 'components/Content';
import Sidebar from 'components/Sidebar';

export default function Home() {
  return (
    <section className="w-full mx-auto lg:w-auto">
      <div className="card">
        <Sidebar />
        <Content />
      </div>
    </section>
  );
}
