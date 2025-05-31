import { SkillsIcons } from "../data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-background transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SkillsIcons.map((skill, index) => (
            <div
              className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-lg border bg-card text-card-foreground shadow-sm hover:border-primary/50 h-40"
              key={index}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="px-3 py-6 relative z-10">
                <div className="flex flex-col gap-5 items-center justify-between">
                  <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
