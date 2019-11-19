<?php

namespace Exercises\Testing;

use PHPUnit\Framework\TestCase;

class MathTest extends TestCase
{
    public function testBoolean()
    {
        $this->assertTrue(true);
    }

    public function testMultiplyResult()
    {
        $result = Math::multiply(3,4);

        $this->assertEquals($result, 12);

    }

    public function testDivideResult()
    {
        $result = Math::divide(10,2);

        $this->assertEquals($result, 5);

    }
    public function testDivideFirstArgumentNotNumericThrowsException()
    {

        $this->expectException('InvalidArgumentException');

        Math::divide('abc',2);

    }

    public function testAddResult()
    {
        $result = Math::add(10,2);

        $this->assertEquals($result, 12);

    }

    public function testAddFirstArgumentNotNumericThrowsException()
    {
        $this->expectException('InvalidArgumentException');

        Math::add('abc', 2);


    }
}