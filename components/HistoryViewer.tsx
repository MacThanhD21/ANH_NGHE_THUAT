
import React from 'react';
import { HistoryItem } from '../types';

interface HistoryViewerProps {
  history: HistoryItem[];
}

const HistoryViewer: React.FC<HistoryViewerProps> = ({ history }) => {
  if (history.length === 0) {
    return (
        <div className="text-center text-red-500 mt-8 p-4 border rounded-lg bg-red-50 border-red-200">
            <p>Lịch sử trống</p>
            <p className="text-sm">Những tấm ảnh bạn tạo sẽ xuất hiện ở đây.</p>
        </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">Lịch Sử Chỉnh Sửa</h2>
      <div className="space-y-4">
        {history.map((item) => (
          <div key={item.id} className="p-3 bg-white border rounded-lg shadow-sm">
            <p className="text-xs text-red-500 mb-2">{item.timestamp.toLocaleString()}</p>
            <div className="flex gap-3">
              <img src={item.images[0]} alt="History thumbnail" className="w-16 h-16 object-cover rounded-md" />
              <p className="text-sm text-red-700 flex-1 break-all line-clamp-3">
                {item.prompt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryViewer;
