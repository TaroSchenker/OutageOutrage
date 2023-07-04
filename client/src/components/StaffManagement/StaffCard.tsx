import React, { useState } from 'react';
import { IClientStaffData, IClientTaskData, Role } from '../../types/types';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Tabs } from 'antd';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from 'recharts';

const { TabPane } = Tabs;

interface StaffCardProps {
  staff: IClientStaffData;
  tasks: IClientTaskData[];
}

const StaffCard: React.FC<StaffCardProps> = ({ staff, tasks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen((prev) => !prev);
  };

  const data = [
    { subject: 'Ambition', A: staff.ambition, fullMark: 100 },
    { subject: 'Loyalty', A: staff.loyalty, fullMark: 100 },
    { subject: 'Skill Level', A: staff.skillLevel, fullMark: 100 },
    { subject: 'Resilience', A: staff.resilience, fullMark: 100 },
    { subject: 'Adaptability', A: staff.adaptability, fullMark: 100 },
  ];

  return (
    <div
      className={`bg-background rounded-lg shadow-lg overflow-hidden text-primary-text my-2 transition-all duration-300 ease-in-out border-2 border-border relative cursor-pointer  ${
        isOpen ? 'col-span-2' : ''
      }`}
      onClick={toggleCard}
    >
      <img
        src={staff.avatarUrl}
        alt={staff.name}
        className="h-full w-full object-cover"
      />
      <div
        className={`px-6 py-4 absolute bottom-0 left-0 bg-opacity-75 bg-background flex flex-col justify-start ${
          isOpen ? 'h-full w-full' : 'h-20'
        }`}
      >
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-bold">{staff.name}</h2>
          <p>{staff.role}</p>
        </div>
        {isOpen && (
          <div className="absolute top-20 bottom-0">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Basic Info" key="1">
                <p>Expertise: {staff.expertise}</p>
                <div style={{ width: '250px', height: '250px', display: 'flex' }}>
  <RadarChart cx={125} cy={125} outerRadius={80} width={250} height={250} data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" stroke="#000000" /> 
    <PolarRadiusAxis />
    <Radar name={staff.name} dataKey="A" stroke="#000000" fill="#8884d8" fillOpacity={0.6} /> 
    <Tooltip />
  </RadarChart>
</div>

              </TabPane>
              <TabPane tab="Salary & Morale" key="2">
                <p>Salary: ${staff.salary}</p>
                <div className="mt-2">
                  <label>Morale: </label>
                  <ProgressBar
                    name="Paul"
                    value={staff.morale * 10}
                    color="secondary-background"
                  />
                </div>
              </TabPane>
              <TabPane tab="Tasks" key="3">
                <p>
                  Current Task:{' '}
                  {staff.currentTask ? staff.currentTask : 'No task assigned'}
                </p>
              </TabPane>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffCard;
