'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ClassroomCreateModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ClassroomCreateModalContext = createContext<ClassroomCreateModalContextType | undefined>(undefined);

interface ClassroomCreateModalProviderProps {
  children: ReactNode;
}

export const ClassroomCreateModalProvider: React.FC<ClassroomCreateModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ClassroomCreateModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children} 
    </ClassroomCreateModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ClassroomCreateModalContext);
  if (!context) {
    throw new Error("useModal debe ser usado dentro de un ClassroomCreateModalProvider");
  }
  return context;
};
