import { useState, useRef, useEffect } from 'react';

interface ImagePreviewModalProps {
	imagePaths: string[];
}

export const ImagePreviewModal = ({ imagePaths }: ImagePreviewModalProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const modalRef = useRef<HTMLDialogElement>(null);
	
	const openModal = (index: number) => {
		setCurrentIndex(index);
		setIsOpen(true);
		modalRef.current?.showModal();
	};
	
	const closeModal = () => {
		setIsOpen(false);
		modalRef.current?.close();
	};
	
	const showPrev = () => {
		setCurrentIndex((currentIndex - 1 + imagePaths.length) % imagePaths.length);
	};
	
	const showNext = () => {
		setCurrentIndex((currentIndex + 1) % imagePaths.length);
	};
	
	useEffect(() => {
		const modalElement = modalRef.current;
		const handleOutsideClick = (e: MouseEvent) => {
			if (e.target === modalElement) closeModal();
		};
		
		modalElement?.addEventListener('click', handleOutsideClick);
		return () => modalElement?.removeEventListener('click', handleOutsideClick);
	}, []);
	
	return (
		<div className="p-4">
			<div className="flex overflow-x-auto gap-4 pb-2">
				{imagePaths.map((img, idx) => (
					<img
						key={idx}
						src={img}
						alt={`Preview ${idx}`}
						className={`w-24 h-24 object-cover rounded-xl cursor-pointer hover:opacity-80 transition ${
							currentIndex === idx && isOpen ? 'ring-4 ring-primary' : ''
						}`}
						onClick={() => openModal(idx)}
					/>
				))}
			</div>
			
			<dialog ref={modalRef} className="modal">
				<div className="modal-box max-w-full sm:max-w-4xl bg-base-100 relative p-4">
					<button
						onClick={closeModal}
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
					>
						✕
					</button>
					
					<div className="flex items-center justify-between max-w-full overflow-hidden">
						<button onClick={showPrev} className="btn btn-circle btn-ghost text-xl">
							❮
						</button>
						
						<div className="flex-1 flex justify-center items-center">
							<img
								src={imagePaths[currentIndex]}
								alt="Full View"
								className="max-w-full max-h-[80vh] object-contain rounded-box"
							/>
						</div>
						
						<button onClick={showNext} className="btn btn-circle btn-ghost text-xl">
							❯
						</button>
					</div>
					
					<div className="text-center mt-3 text-sm text-base-content opacity-70">
						{currentIndex + 1} / {imagePaths.length}
					</div>
				</div>
				
				<form method="dialog" className="modal-backdrop backdrop-blur-sm bg-black/30 dark:bg-black/50">
					<button type="button" onClick={closeModal}>close</button>
				</form>
			</dialog>
		</div>
	);
};
