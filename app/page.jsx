export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-black mb-4">
            Mi Primer Proyecto Task Management
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Bienvenido a mi primera aplicación de gestión de tareas construida con Next.js. ¡Comienza organizando tus tareas ahora!
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-black mb-4">Características Destacadas</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Intuitiva interfaz de usuario</li>
            <li>Organiza tus tareas en proyectos</li>
            <li>Organiza tus tareas en listas</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-black mb-4">Lo que dicen nuestros usuarios</h2>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <blockquote className="italic text-gray-700">
              "¡Esta aplicación ha transformado la forma en que administro mis tareas diarias! Muy impresionado."
            </blockquote>
            <cite className="mt-2 block text-indigo-700">- Elon Musk</cite>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center mt-8">
            <blockquote className="italic text-gray-700 mt-4">
              "¡Ya no tengo que preocuparme por olvidar las tareas importantes! ¡Gracias!"
            </blockquote>
            <cite className="mt-2 block text-indigo-700">- Jeff Bezos</cite>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-black mb-4">Cómo empezar</h2>
          <ol className="list-decimal list-inside text-lg text-gray-700">
            <li>Accede a proyectos</li>
            <li>Crea tu primer proyecto</li>
            <li>Crea tu primera lista de tareas</li>
            <li>Añade tareas a la lista y comienza a organizarte</li>
          </ol>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-black mb-4">Últimas Actualizaciones</h2>
          <p className="text-lg text-gray-700">Mira nuestras últimas mejoras, ¡te encantarán!</p>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Mejoras en el rendimiento</li>
            <li>Mejoras en la interfaz de usuario</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
