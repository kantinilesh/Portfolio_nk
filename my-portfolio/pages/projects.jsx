import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      name: 'Nivaran Health',
      description: 'AI-based Healthcare App using HTML, CSS, JavaScript, and ML/DL models to predict various health conditions based on user-input images.',
      github: 'https://github.com/yourusername/nivaran-health',
    },
    {
      name: 'Farm_Health',
      description: 'Platform for farmers using neural networks to predict potato plant diseases and provide insights on fertilizer products using NLP.',
      github: 'https://github.com/yourusername/farm-health',
    },
    {
      name: 'SUNSCOPE',
      description: 'Platform to simplify solar energy adoption for households using satellite imagery and YOLO v11 model for rooftop annotation.',
      github: 'https://github.com/yourusername/sunscope',
    },
  ];

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Layout>
  );
}