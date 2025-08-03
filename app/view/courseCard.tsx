import React, { Key } from 'react';
import { Course } from '../model/course';
import { Card, CardContent } from '@/components/ui/card';

const CourseCard = (key: Key, course: Course) => {
    return (
        <Card key={key}
            className="p-1 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardContent className="pt-6 text-start space-y-2">
                <h2 className="text-center bg-gradient-to-br from-orange-500 to-pink-500 bg-clip-text text-transparent h-32 flex items-center justify-center mx-auto mb-4 text-lg font-semibold">{course.title}</h2>

                <p><strong>💷 </strong> £{course.price}/{course.duration}</p>

                {course.fianncialOption && <p>💳 Financial options available</p> }

                <p><strong>🗂️ Assessment: </strong> {course.assessment}</p>

                <p><strong>🎯 Audience: </strong> {course.targetAudience}</p>

                <p><strong>🧑‍🏫 Methods: </strong> {course.teachingMethods}</p>

                {course.topicsLearned && <p><strong>📘 Topics: </strong> {course.topicsLearned}</p>}

                {course.requirements && <p><strong>🧑‍🎓 Requirements: </strong> {course.requirements}</p>}

                {course.spaces && <p><strong>✅ </strong> {course.spaces}</p>}

                <p>{course.fastTrack && '⏩ Fast track available'}</p>

                {course.notes && <p><strong>📝 </strong> {course.notes}</p>}
            </CardContent>
        </Card >
    );
};

export default CourseCard;
