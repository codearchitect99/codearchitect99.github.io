import { useState } from 'react';

interface ImagePreviewModalProps {
	imagePaths: string[];
}

export const ImagePreviewModal = ({ imagePaths }: ImagePreviewModalProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	
	const openModal = (imageUrl: string, index: number) => {
		setSelectedImage(imageUrl);
		setCurrentIndex(index);
		setIsOpen(true);
	};
	
	const closeModal = () => {
		setIsOpen(false);
		setSelectedImage(null);
	};
	
	const showPrev = () => {
		const newIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
		setSelectedImage(imagePaths[newIndex]);
		setCurrentIndex(newIndex);
	};
	
	const showNext = () => {
		const newIndex = (currentIndex + 1) % imagePaths.length;
		setSelectedImage(imagePaths[newIndex]);
		setCurrentIndex(newIndex);
	};
	
	return (
		<div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
			{imagePaths.map((img, idx) => (
				<img
					key={idx}
					src={img}
					alt={`Preview ${idx}`}
					className="w-full h-24 object-cover rounded-xl cursor-pointer hover:opacity-80 transition"
					onClick={() => openModal(img, idx)}
				/>
			))}
			
			{isOpen && (
				<dialog id="image_modal" className="modal modal-open">
					<div className="modal-box max-w-3xl bg-base-100 text-base-content relative">
						<form method="dialog">
							<button
								onClick={closeModal}
								className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
							>
								✕
							</button>
						</form>
						
						<div className="flex items-center justify-between">
							<button onClick={showPrev} className="btn btn-ghost text-2xl">⟨</button>
							{selectedImage && (
								<img
									src={selectedImage}
									alt="Full View"
									className="max-h-[80vh] object-contain rounded-box mx-4"
								/>
							)}
							<button onClick={showNext} className="btn btn-ghost text-2xl">⟩</button>
						</div>
					</div>
					
					<form method="dialog" className="modal-backdrop bg-black/50 dark:bg-black/70">
						<button onClick={closeModal}>close</button>
					</form>
				</dialog>
			)}
		</div>
	);
};