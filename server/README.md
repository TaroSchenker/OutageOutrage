The gameplay of "OUTAGE OUTRAGE" is designed to simulate the challenges of managing a tech organization. The game progresses in turns, representing days or weeks. Each turn, players receive an overview of their organization's current state and have to manage tasks, staff, and events accordingly.

- **Game Initialization:** When a new game starts, generate the initial tasks, staff, and events using pre-defined templates or random parameters.
- **Starting Budget and Expenses:** Set the starting budget so that it doesn't cover all existing costs, pushing the player to make strategic decisions immediately.
- **Staff Cutting Mechanic:** Implement a mechanic that allows players to reduce staff or hours to immediately cut expenses and affect staff morale.
- **Morale System:** Develop a morale system that impacts staff productivity, retention, and occurrence of events.
- **Task Assignment and Completion:** Allow players to assign tasks to staff members based on their skills. If critical tasks remain uncompleted, it could result in negative consequences.
- **Timed Events and Budget Cuts:** Generate timed events, such as budget cuts or staff leaving, and allow players to respond and adjust their strategies.
- **Win/Loss Conditions:** The game ends in a loss if the website goes down, staff leave, morale drops to zero, or critical tasks pile up.
- **Communication with the Server:** Use APIs and the server backend to handle game logic, store the current state of the game, and perform regular updates.
2. **Game Balance & Features:**
    
    Balancing the game requires considering task complexity, staff skill level, salaries, morale, event likelihood, and budget. Players should be rewarded for strategic decisions, and while experimentation might lead to some losses, it should not be excessively penalized.
    
    Additional gameplay features could include:
    
    - **Skills Improvement Over Time:** Staff members could improve their skills over time as they complete tasks, making task assignment a strategic choice.
    - **Tasks Interdependencies:** Some tasks could depend on others, adding an extra layer of strategy to the task assignment process.
    - **Negotiation with Staff:** Players could have an option to negotiate with staff members who receive job offers.
    - **Performance Metrics:** Include analytics or performance metrics to give the player a clearer picture of how their decisions impact the game.
    - **Emergency Fund:** Allow players to set aside a portion of the budget as an "emergency fund" that can be used to quickly react to unforeseen events or problems.
3. **API Collection and Folder Structure:**
    
    The game uses a collection of four APIs for game management, staff, game events, and tasks. These APIs handle functionalities like managing games, staff, tasks, game events, and managing the staff morale.
    
    The recommended folder structure for your backend can be divided into various sections like **`src`**, **`tests`**, and **`node_modules`**. Inside the **`src`** directory, you could further categorize your codebase into **`config`**, **`controllers`**, **`models`**, **`routes`**, **`services`**, and **`utils`**.
    
4. **UI Design and User Experience:**
    
    The game's UI should be visually appealing, intuitive, and functional. Key elements include a top bar with critical information, a main view for staff management, and a side bar for strategic decisions.
    
    The UI also facilitates task assignment, staff management, handling of events and challenges, tracking game progress, and accessing an in-game knowledge base. It is designed to provide a seamless experience combining strategy, education, and satire.

END**

NOTE TO CHATGPT: above is my current project description. i have some older descriptions which may have some useful data in it but may have some conflicting specs in them. Please concat them together, any inconsistencies please ask me to clarify.


**START
OUTAGE OUTRAGE" is a management simulation game where the player takes on the role of a tech organisation manager. The organisation is going through a buyout in 6 months and the budget is dwindling. The goal is to keep the website online during this period while managing staff cuts and increasing discontent.

The game is partly educational, illustrating the different roles and tasks within a tech organization, and partly satirical, highlighting the absurdities of corporate life during transitions.

## **Game Mechanics:**

**1. Staff Management:**

Players manage a variety of staff roles including Frontend Developer, Backend Developer, QA, Project Manager, UX/UI Designer, Security Specialist, and more. Each role contributes differently to the operations. Individual staff members have traits such as ambition, loyalty, skill level, resilience, and adaptability. These traits affect their performance, morale, and likelihood to leave the organisation.

**2. Budget and Resources:**

Players are given a limited budget and must make strategic decisions about staff allocation, training, and technology investments. Resources can also be spent on morale-boosting initiatives, though this would consume part of the budget.

**3. Tasks and Project Management:**

Different tasks such as bug fixing, implementing new features, and security patches arise and must be delegated to the staff. These tasks require different roles and amounts of time to complete. Prioritisation and delegation become a critical part of the gameplay.

**4. Morale and Discontent:**

Staff morale is a significant factor in the game. Actions such as staff cuts decrease morale, leading to decreased productivity and the increased likelihood of staff leaving the organisation. Players must manage morale strategically to prevent a total collapse.

**5. Events and Challenges:**

Random events occur throughout the game, such as server crashes, security breaches, key staff receiving job offers, or unexpected budget cuts. These events provide additional challenges and make the game more dynamic.

**6. Advanced Mechanics:**

Advanced gameplay mechanics such as resource allocation, handling technical debt, and strategic long-term planning add complexity and depth to the game. These mechanics require advanced knowledge and strategic thinking from the player.

**7. Win/Loss Conditions:**

The game ends in a loss if the website goes offline for too long, if all staff leave, or if the morale hits zero. The win condition is keeping the website online and the organization functional until the buyout is complete.

## **Game Interface and Interaction:**

The game has a simple, clean, and minimalistic user interface. It consists of a Top Bar displaying essential information like the in-game date/time, remaining budget, and staff morale indicator. The Main View is a grid or list view of the staff members, displaying name, role, skill level, morale, and current task. A Side Bar serves as an action panel for making decisions, assigning tasks, and handling events.

Players interact with the game mainly through clicking and drag-and-drop actions. Clicking on a staff card brings up additional information and possible actions. Tasks can be assigned by dragging and dropping them onto staff cards. Different tabs on the Side Bar provide various management options.

## **Visual Style and Assets:**

The visual style of the game is flat and simple, with AI-generated assets. Staff cards are represented by AI-generated avatars, while tasks and events are represented by simple, minimalistic icons. The color palette is muted, with colors primarily denoting task types or event urgency.

## **Educational Aspect:**

The game provides an immersive learning experience about running a tech organization. It highlights the significance of different roles, tasks, and strategic decision-making in keeping a tech organization functional. The game includes a "library" or "knowledge base" where players can learn more about different aspects of running a tech organization.

## **Satirical Aspect:**

The game incorporates satire through its depiction of corporate life during transitions. The randomness of events, absurdity of demands, and precarious balance between morale and productivity aim to provide humor and levity.

## **Difficulty:**

The game is designed to be quite challenging and rewards strategic thinking. Players require pre-existing knowledge about tech organizations to succeed, and the game provides resources for players to learn these aspects.

With these specifications, "Tech Org Survival" promises an engaging, educational, and humorous experience for players interested in the tech industry and corporate dynamics.

**1. Detailed Gameplay Flow:**

The gameplay can proceed in turns representing days or weeks. At the start of each turn, players receive an overview of the current state of the organization - budget, morale, active staff, ongoing tasks, and unassigned tasks. They also receive notifications of any completed tasks, staff resignations, or new events.

Players then allocate staff to tasks based on the staff's role, skill level, and the task's complexity. They may also choose to invest in training for staff members, boosting their skill level but taking them away from task completion for a period.

Events occur randomly but become more likely as morale decreases or if critical tasks are left uncompleted. When an event occurs, players have to manage it - this could involve assigning staff, spending budget, or accepting a hit to morale.

The turn ends when the player decides they have made all necessary decisions for that period. The game then simulates the progression of tasks, decreases the budget based on staff salaries and investments, and adjusts morale based on the actions taken in the turn.

**2. Game Balance:**

Balancing the game involves ensuring that it's challenging but not impossible, rewarding strategic decision-making without punishing experimentation too harshly.

Task complexity and staff skill level are key factors. Simple tasks should be doable by less skilled staff, but complex tasks require higher skill levels. Balancing this encourages the player to invest in staff training.

Salary should be proportional to the skill level of staff. More skilled staff contribute more but also cost more, forcing the player to balance their budget carefully.

The effect of morale on productivity and staff retention should be significant but not overwhelming. Low morale can cause staff to leave or work less effectively, but sudden, large drops in morale should be avoidable with careful management.

The likelihood and impact of events should increase as the game progresses, adding difficulty but also providing opportunities for strategic decision-making. Some events could even provide a windfall or advantage if handled correctly, adding an element of risk and reward.

Finally, the budget should be tight but manageable. Players should feel the pressure to make cuts and save money, but it should be possible to keep the organization running efficiently with careful management. Cutting staff should be a last resort, not a first choice.

1. **Skills Improvement Over Time:** In addition to training, staff members could also gradually improve their skills over time as they complete tasks. This would make assigning tasks to less skilled staff a strategic choice, as it could potentially make them more valuable in the long run.
2. **Tasks Interdependencies:** Some tasks could depend on others, meaning they can't be started until a different task is completed. This would add an extra layer of strategy to the assignment of tasks, as players would need to manage their staff's workload effectively to ensure tasks are completed in the right order.
3. **Negotiation with Staff:** When a staff member receives a job offer (random event), you might have an option to negotiate with them, potentially offering a raise (if the budget allows) to keep them in your team. This could make the gameplay more interactive and add a layer of emotional attachment to the staff members.
4. **Performance Metrics:** Consider incorporating some form of analytics or performance metrics to give the player a clearer picture of how their decisions impact the game. This could include stats on staff performance, budget spending efficiency, task completion rate, etc.
5. **Emergency Fund:** The player could have an option to set aside a portion of the budget as an "emergency fund". This could be used to quickly react to unforeseen events or problems, adding another layer to the budget management aspect of the game.
To integrate the described gameplay logic into your game, you can follow these steps:

1. **Game Initialization**: When a new game is created, you can utilize the server to generate the pre-built tasks, staff, and events for the game. This can be done using pre-defined templates or random generation based on specific parameters.
2. **Starting Budget and Expenses**: Set the initial budget, ensuring that it is insufficient to cover all existing expenses. This can be achieved by calculating the sum of staff salaries and other costs and setting the budget slightly below this value, forcing the player to make immediate cuts.
3. **Staff Cutting Mechanic**: Implement a mechanic that allows players to cut staff, either by firing them or reducing their hours. This action should immediately reduce expenses and affect staff morale.
4. **Morale System**: Create a morale system in which staff members have a morale score affected by actions such as staff cuts or other events. Lower morale increases the likelihood of staff members leaving the organization, seeking new job opportunities, or reducing their productivity.
5. **Task Assignment and Completion**: Implement a system that allows players to assign tasks to staff members based on their skills, which also checks whether specific tasks can be completed with the remaining staff or not. If critical tasks remain uncompleted, this could contribute to the website going down or other negative consequences.
6. **Timed Events and Budget Cuts**: Generate events occurring at certain time intervals, such as budget cuts or staff leaving the organization. Some events, like budget cuts, can be predetermined, while others, like staff departures, can be influenced by factors like morale and staff satisfaction. Players should be able to react to these events and adapt their strategies accordingly.
7. **Win/Loss Conditions**: Establish win/loss conditions that include keeping the website online and maintaining a minimum operational staff count. If critical tasks pile up, the website goes down, staff leave, or morale drops to zero, the game ends in a loss.
8. **Communication with the Server**: Utilize APIs and the server backend to handle game logic, store the current state of the game, and perform regular updates on tasks, staff, events, budget, and other parameters. This will help keep the game consistent and manageable, especially when incorporating more complex mechanics and interactions.

By following these steps and building on your existing server infrastructure, you can introduce the desired gameplay features and challenges into your game. As always, fine-tuning and balancing your game mechanics will be crucial to create an engaging and satisfying gameplay experience for your players.
