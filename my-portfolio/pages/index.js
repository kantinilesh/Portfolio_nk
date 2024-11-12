import Layout from '../components/Layout';
import SkillCard from '../components/SkillCard';

export default function Home() {
  const skills = [
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'Python', icon: 'python.svg' },
    { name: 'Java', icon: 'java.svg' },
    { name: 'C++', icon: 'cpp.svg' },
    { name: 'Dart', icon: 'dart.svg' },
    { name: 'Kotlin', icon: 'kotlin.svg' },
    { name: 'React', icon: 'react.svg' },
    { name: 'Flutter', icon: 'flutter.svg' },
  ];

  const experiences = [
    {
      title: 'Member, Google Developers Group Chennai',
      date: 'Dec 2023 – Present',
      logo: 'gdg.svg',
      description: 'Engaged in developer-focused events and workshops, enhancing skills in Google technologies such as Android, Firebase, and Google Cloud.',
    },
    {
      title: 'Technical Team Member, ACM SRMSIGKDD',
      date: 'June 2024 - Present',
      logo: 'acm.svg',
      description: 'Contributed to the development and implementation of technical projects, including data science and machine learning initiatives.',
    },
    {
      title: 'Summer Internship, Ms Azure',
      date: 'Jan 2024 – May 2024',
      logo: 'azure.svg',
      description: 'Gained hands-on experience in deploying and managing cloud-based applications using Microsoft Azure services.',
    },
  ];

  return (
    <Layout>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
        <p>
          Web Developer with 3 years of experience, skilled in HTML, CSS, and JavaScript. Proficient in Data Structures, OOP, and C++, currently focusing on
          Cross Platform App Development using DART and Flutter, with additional expertise in cloud technologies and SQL and also introducing myself to the
          blockchain world.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        {experiences.map((exp) => (
          <div key={exp.title} className="mb-4">
            <div className="flex items-center space-x-2">
              <img src={`/images/companies/${exp.logo}`} alt={exp.title} className="w-8 h-8" />
              <h3 className="text-xl font-bold">{exp.title}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{exp.date}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Bachelor of Technology (Computer Science)</h3>
          <p>SRM Institute of Science and Technology, Kattankulathur</p>
          <p>Aug 2023 - May 2027</p>
          <p>GPA 9/10</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Class 12th - CBSE(PCM)</h3>
          <p>Delhi Public School, Bokaro</p>
          <p>May 2022 – May 2023</p>
          <p>Percentage – 81%</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Class 10th - CISCE</h3>
          <p>St. Xavier's School, Bokaro</p>
          <p>May 2015 – May 2021</p>
          <p>Percentage – 90%</p>
        </div>
      </section>
    </Layout>
  );
}