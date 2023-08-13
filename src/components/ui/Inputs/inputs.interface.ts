import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';

export interface IField extends InputHTMLAttributes<HTMLInputElement> {}

export interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface ICheckbox extends IField {
	id: string;
	children: ReactNode;
}
