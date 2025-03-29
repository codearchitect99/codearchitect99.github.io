import { useState, useRef, useEffect } from 'react';

interface ImagePreviewModalProps {
	imagePaths: string[];
}

export const ImagePreviewModal = ({ imagePaths }: ImagePreviewModalProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const modalRef = useRef<HTMLDialogElement>(null);
	
	const openModal = (index: number) => {
		setCurrentIndex(index);
		modalRef.current?.showModal();
	};
	
	const closeModal = () => {
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
	
	const [showAll, setShowAll] = useState(false);
	
	const visibleImages = showAll ? imagePaths : imagePaths.slice(0, 6);
	
	
	return (
		<div className="py-4">
			{imagePaths && (
				<>
					<p className="text-contents-title">Images</p>
					<div>
						<div className="grid grid-cols-6 gap-2 py-2">
							{visibleImages.map((img, idx) => (
								<img
									key={idx}
									src={img}
									alt={`Preview ${idx}`}
									className="w-24 h-24 object-cover rounded-xl hover:opacity-80 transition block"
									onClick={() => openModal(idx)}
								/>
							))}
						</div>
						
						{imagePaths.length > 6 && (
							<button
								onClick={() => setShowAll(!showAll)}
								className="btn btn-sm "
							>
								{!showAll ? "+ Show more" : "- Show less"}
							</button>
						)}
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
				</>
			)}
		</div>
	);
};
